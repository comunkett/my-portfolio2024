
//*Lo que vemos es la representación de una colección en MongoDB compuesta por: "Task" y "Users"
//*Es importante revisar MongoDB Atlas para entender mejor esto:

const objects = { //Objeto task.
    _id:"Object('skf33kjkjhk432jk43kj')",
    title:"to-do-list",
    description:"context 2dolist",
    category:"x",
    priority:"low-medium- or high",
    notes:"aditional description to feed",
    tags:[
        "0","1","2","3","---"
    ],
    user:"Object('skf4322k432jlsñdsaw43dr')",
    createdAt: 2023-0..toExponential(),
    updatedAt: 2023-0..toExponential(),
    __V: 0 //Esta es la versión de la tabla en MongoDB, revisar documentación.
}

console.log(objects);

//Users que se conectan por "id" al objeto task.
const users = {
    _id:"Object('skf4322k432jlsñdsaw43dr')",
    email:"conejtu@gmail.com",//example
    password:"#ddeewjslfahlfjafjklsdkdbgkjsalfkhe3522333ndajknfkawdjkkxsjdi332akekqb1o",
    createdAt:2023,
    updatedAt:2023,
    __V:0
}

console.log(users)

//En el index.js debe de ir lo siguiente:
module.exports= (app) => {
    require('./user')(app);
    require('./task')(app)
}

//ya en el archivo "task.js", tenemos:
module.exports = (app)=> {

    const task = require('../controllers/task');
    const { verifyToken } = require("../utils/auth");

    //crea nueva tarea
    app.post('api/task', verifyToken, task.create);
    // genera las tareas/ las obtiene y genera toda la información relacionada a eso
    app.get('api/task/generate', verifyToken, task.generate);
    // solicita una lista de tareas o una en específico
    app.get('api/task/:id?', verifyToken, task.fetch);
    // actualiza las tareas
    app.put('api/task/:id', verifyToken, task.update);
    // elimina las tareas
    app.delete('api/task/:id', verifyToken, task.delete);

};

//ya el archivo "user.js", tendremos:
module.export = (app) => {

    const user = require('../controllers/user');
    //registro de usuario
    app.post('/api/user/signup', user.signup);
    //login
    app.post('/api/user/login', user.login);
}

//Los archivos de la carpeta 'models' son archivos que mongoose lee y utiliza para distribuir los "schema"
//de la base de datos y los utiliza para controlar las creaciones (Post).
//dentro de la carpeta models, "Clients.js":
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        emai: { type: String, required: true},
        password: { type: String, required: true}
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Clients', userSchema)


//Los archivos dentro de la carpeta son 2, uno de estos esta relacionado directamente relacionados
//con la creación de las tareas y su implementación.
//dentro de la carpeta models, "Tasks"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema(
    {
        title: { type: String, required: true},
        description: { type: String, required: true},
        category: { type: String, required: true},
        priority: { type: String, required: true},
        notes: { type: String, required: true},
        tags: [String],
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Clients',
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Tasks', taskSchema);

//Carpeta de los controladores, por defecto: 'controllers' dónde irán los respectivos disparadores de accesos
//accesos para el caso de los usuarios, y tareas a crear en el otro archivo
//2 en total, los siguientes:
//* 1) user.controller.js */
const User = require('../models/Clients');
const { STATUS_CODE } = require('../utils/constants.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

//Usuarios registrado
exports.signup = async (req, res)=> {
    try {
        const { email, password } = req.body;
        //la magia, chequea si el email existe en los registros de la base de datos
        const existUser = await User.findOne({ email, password })
        if(existUser){
            return res // recupera los datos
            .status(STATUS_CODE.BAD_REQUEST) // procesa el estado
            .json({ success: false, error: 'email already exist'}) // determina ERROR en caso de el correo exista y se intente registrar un nuevo correo con el mismo nombre
        }
        // oculta la contraseña (encripta)
        const hashedPassword = await bcrypt.hash(password);
        //crea un nuevo usuario a continuación
        const newUser = new User({
            email,
            password: hashedPassword
        });
        await newUser.save();
        res
            .status(STATUS_CODE.CREATED)
            .json({ success: true, message: 'signup sucessful'})
    } catch (error) {
        res
            .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
            .json({ sucess: false, error: 'Internal server failure'})
    }
}

exports.login = async (req, res) => {
    try{
        const { email, password } = req.body;
        //esta vez chequea si el usuario existe
        const user = await User.findOne({ email });
        if (!user){
            return res
                .status(STATUS_CODE.NOT_FOUND)
                .json({ success: false, error: 'Invalid email'})
        }
        //comparamos las contraseñas
        const passMatch = await bcrypt.compare(password)
        if(!passMatch) {
            return res
                .status(STATUS_CODE.NOT_FOUND)
                .json({ success: false, error:'Invalid password'})
        }
        //Si el usuario no puede ingresar, por X causa, se crea un token de acceso que permite reiniciar los datos y asignar un nuevo registro
        const accessToken = jwt.signup({ userId: user._id, expiresIn: '24h' }); // el registro se debe hacer dentro de las 24 horas siguientes.

        const refreshToken = jwt.sign(
            { userId: user_id},
            process.env.SECRET_KEY,
            { expiresIn: '7d'}
        );
        //Envia la información del usuario a lo largo del token, para su nuevo registro.
        res.json(
            {
                success: true,
                user: {_id: user._id, email: user.email },
                accessToken,
                refreshToken
            }
        );
    }catch (error) {
        res
            .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
            .json({ success: false, error: 'Internal server error'})
    }
}

/*2)task.controller.js */
const Task = require('../models/Tasks');
const { STATUS_CODE } = require('../utils/constants.js')
const { Configuration, OpenAiApi } = require("openai")

//Creando la tarea
exports.create = async (req, res) => {
    try {
        const userId = req.userId;

        const task = new Task({

            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            priority: req.body.priority|,
            notes: req.body.notes,
            tags: req.body.tags || [],
            user: userId,
            
        });
        task
            .save().then((result)=>{
                return res.status(STATUS_CODE.CREATED).json({
                    sucess: true,
                    message: "Your task was sucessful created",
                    data: result,
                });
            }).catch((err)=>{
                return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    message: err.message ||"Error to create the task",
                });
            });
    }catch (error){
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: error.message ||"something went wrong",
        });
    }
};

//La IA en juego:
//Generando una tarea a partir de la API de OpenAi
exports.generate = async (req, res) => {
    try{
        const jsonId = {
            "title":"Name of the task",
            "description":"Description of the task",
            "tags":["tag1","tag2","tag3","..."],
            "priority":` "high" | "medium" | "low" `,
            "notes":"Additional notes about task"
        }
        const prompt = req.query.prompt;
        const content = `You are an AI assistant for task management system 
        Do not include a explanations, just/only provide a RFC8 ${JSON.stringify(jsonId)}`;
        const config = new Configuration({
            apikey: process.env.GPT_API_KEY,
        });
        const openai = new OpenAiApi(config);

        const response = await openai.createChatCompletion( {
            
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "user",
                "content": content
                }   
            ],
            temperature: 1,
            max_tokens: 256,
            top_p:1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
           if (response.data && response.data.id) {
            const choices = response.data.choices;
            let contentObj = null

            for (let i=0; i <choices.length; i++){
                let message: choices[i].message;
            
                if (message.role === 'assistant') {
                    contentObj = JSON.parse(message.content)
                    break
                }
            }
            if (contentObj){
                res.status(STATUS_CODE.OK).json({ success: true, data: contentObj})
            }else{
                return res.status(STATUS_CODE.FORBIDDEN).json({
                    success: false,
                    message: error.message || "something went wrong"
                });
            }
           } else {
            return res.status(STATUS_CODE.BAD_REQUEST).json({
                sucess: false,
                message: error.message || "something went wrong"
            })
           }
    } catch (error) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}