// import { useState } from "react";
import useMouse from "../hooks/useMouse";

const CardToolsProject = ({projectSkills}) => {

    const tools = ["Git", "Wordpress", "VSC", "Firebase", "Airtable", "Atlassian", "Vercel", "DBdiagram", "Netlify"]

    return (
            <div 
                    className="col-4 text-center"
                    style={{
                        display:"flex",
                        justifyContent:"center",
                    paddingLeft:"10px"}}>
                        <div className="cardSkill" onMouseMove={useMouse()}>
                            <h2 className="mt-3 mb-4" style={{fontSize:"40px"}}>Projects tools</h2>
                            <ul className="d-flex w-100 flex-wrap justify-content-center gap-2 mb-5" style={{width:"fit-content", maxHeight:"400px", paddingRight:"20px"}}>
                                {projectSkills.map((skill, index) => (
                                <div className="skillicon col-3 my-2"
                                     key={index}
                                     >
                                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                        <button  style={{width:"52px", height:"52px",margin:"0", background:"none", padding:"2px", border:"none", borderRadius:"50%"}} >
                                        {skill}
                                        </button>
                                       {tools[index]}
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

export default CardToolsProject;