import useMouse from "../hooks/useMouse";

const CardFullStack = ({fullstackSkills}) => {

    const arrayWords = ["Nginx","Axios","Redux","Webhook","socket.io","Jest","Zod","Dialogflow","CI/CD","Swagger","GraphQL","Elasticsearch","RabbitMQ","dbdiagram","FastAPI","Django","gevent","Conda","Lambdas","PyUnit"]

    return (
            <div 
                    className="col-4 mx-3 text-center"
                    style={{
                        display:"flex",
                        justifyContent:"center",
                    paddingLeft:"10px"}}>
                        <div className="cardSkill" onMouseMove={useMouse()}>
                            <h2 className="mt-3 mb-4" style={{fontSize:"40px"}}>Full-Stack</h2>
                            <ul className="d-flex w-100 flex-wrap justify-content-center gap-2 mb-5" style={{width:"fit-content", maxHeight:"380px", paddingRight:"20px"}}>
                                {fullstackSkills.map((skill, index) => (
                                <div className="skillicon col-3 my-2"
                                     key={skill.key}
                                     >
                                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                        <button  style={{width:"52px", height:"52px",margin:"0", background:"none", padding:"2px", border:"none", borderRadius:"50%"}} >
                                        {skill}
                                        </button>
                                        {arrayWords[index]}
                                    </div>
                                </div>
                                ))}
                            </ul>
                        </div>
                        {/* <button onClick={handleChange}>
                            Add
                        </button> */}
                    </div>
    );
};

export default CardFullStack;