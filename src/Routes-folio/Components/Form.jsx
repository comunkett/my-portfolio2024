import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Form(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8af405i','template_k6jyfz7', form.current, {
          publicKey: 'jehlRwKlgCmQVO8OJ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    const {register, formState: {errors}} = useForm();
    console.log(errors);

    return (
        <div className="p-4 py-3" style={{
            width:"450px",
            padding:"30px",
            borderRadius:"10px",
            backgroundColor:"#181717",
            boxShadow:"0 4px 10px rgba(255, 255, 255, 0.363)",
            zIndex:"3"
        }}>
        {/* <form className="d-flex flex-column" onSubmit={handleSubmit((d)=>
            {console.log(d)}
        )}> */}
        <form className="d-flex flex-column gap-1" ref={form} onSubmit={sendEmail}>
        <h4 className="text-center text-light">Contact me</h4>
        <div style={{
            width:"90%",
            border:"0.5px dotted gray",
            display:"flex",
            margin:"auto",
            borderRadius:"10px",
            marginBottom:"10px"
        }}>
        </div>
        {/* nombre */}
        <label htmlFor="name">
            Name
        </label>
        <input type="text" name="user_name" 
        {...register("user_name", {required: true})}/>
        {errors.name && 
        <span className="field-error">
            * Name is required
        </span>}
        {/*correo */}
        <label htmlFor="correo">
            Email
        </label>
        <input 
        type="email" 
        placeholder="" 
        name="user_email" {...register("user_email", 
        {required: {
            value: true,
            message: "* Please input a valid email" 
        },
            minLength: {
                value: 5,
                message: "It must be at least 5 characters (alphanumeric)"
            },
            pattern:{
              value:  /^[a-z0-9._%+-]+@[a-z0.9.-]+\.[a-z]{2,6}$/,
              message: "email not valid"
            }
        },  
        )} />
        {errors.email && 
        <span className="field-error">
            {errors.email.message}
        </span>}
        {/*Comentarios*/}
        <label aria-valuetext="30">
            Message
        </label>
        <textarea 
        type="textarea" 
        name="message"
        {...register("message", {required: true})}/>
         {errors.description && 
        <span className="field-error">
            * Come on, a good comment is worth to all
        </span>}
        {/* <label htmlFor="company">
            Company Name
        </label>
        <input type="text" name="user_company" id="" /> */}
        {/* Fecha de envío */}
        {/* <label htmlFor="date" >
            Schedule&date
        </label> */}
        {/* <input type="date" name="date" {...register("date", 
        {validate: (value) => {
            const dateOps = new Date(value)
            const currentDate = new Date()
            const ageRange = currentDate.getFullYear()-dateOps.getFullYear()
            console.log(ageRange)

            return ageRange > 18 || "Must be over 18 years above" */}

{/* // En esta sección está la forma más larga de utilizar este código. Arriba una mejor práctica
            // if (ageRange > 18) {
            //     return true;
            // }else{
            //     return <span className="field-error">"Must be over 18 years, sorry"</span className="field-error">  ;
            // }

        }
            
        })} /> */}
        <button className="btn-submit" type="submit">Send proposal</button>
        {/* <input type="submit" value="click on me" /> */}
        </form>
        </div>
    )
    
}

export default Form