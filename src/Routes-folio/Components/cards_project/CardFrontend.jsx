import useMouse from "../hooks/useMouse";
// import data from '../../../data.json'

const CardFrontend = ({ skills }) => {

    const arrayWords = ["HTML5", "CSS3", "Javascript", "React", "Tailwind", "Shadcn", "Bootstrap", "Vite", "Storybook"];

    return (
            <div 
                    className="col-4 mx-3 text-center"
                    style={{
                        display:"flex",
                        justifyContent:"center",
                    paddingLeft:"10px"}}>
                        <div className="cardSkill" onMouseMove={useMouse()}>
                            <h2 className="mt-3 mb-4" style={{fontSize:"40px"}}>Frontend</h2>
                            <ul className="d-flex w-100 flex-wrap justify-content-center gap-2 mb-5" style={{width:"fit-content", maxHeight:"380px", paddingRight:"20px"}}>
                                {skills.map((skill, index) => (
                                <div className="skillicon col-3 my-2"
                                     key={skill.key}
                                     >
                                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                        <button  style={{width:"52px", height:"52px",margin:"0", background:"none", border:"none"}} >
                                        {skill}
                                        </button>
                                        {arrayWords[index]}
                                    </div>
                                </div>
                                ))}
                            </ul>
                        </div>
                    </div>
    );
};

export default CardFrontend;