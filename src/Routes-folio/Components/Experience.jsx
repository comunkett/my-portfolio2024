import { GrPersonalComputer } from "react-icons/gr";
import Education from '../Components/Education'

const Experience = () => {
    return (
        <section className='container py-5' id="experience">
                <h2 className='text-intro w-100 text-center'>
                    Laboral Experience
                </h2>
                <p className='text-center text-white-50 py-2'>
                In my broad path, I have been in the right place to take advantage of the best opportunities,
                <br /> I have also been given that opportunity and here is my career path:
                </p>
                <div className='row py-4 mx-0 w-100'>
                    <div className='w-100'>
                        <article className='container'>
                            <ul className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
                                <li className='ml-5' style={{
                                   height:"fit-content",
                                   padding:"10px"
                                }
                                }>
                                    <span style={{
                                        backgroundColor:"blue",
                                        borderRadius:"50%",
                                        padding:"10px",
                                        marginLeft:"-20px"
                                    }}>
                                        <GrPersonalComputer size={20}></GrPersonalComputer>
                                    </span>
                                    <div className='d-flex flex-column' style={{
                                         borderLeft:"1px solid gray",
                                         height:"max-content",
                                         paddingLeft:"40px"
                                    }}>
                                    <h3 className='h5 py-2' style={{
                                        color:"rgba(187, 175, 169, 1)"
                                    }}>
                                        Backend Developer / remote
                                    </h3>
                                        <span className="text-primary h4">
                                        🏛 Sontech & Ecuasueña
                                        </span>
                                    <p style={{color:"gray"}}>
                                        June 2023 to January 2024
                                    </p>
                                    <p style={{
                                        width:"700px"
                                    }}>
                                    💿Built a chatbot using Dialogflow, Node.js, Express.js and PostgreSQL, ensuring data integrity and data testing with Zod, Postman, Jest and Cypress. <br />
                                    💿Implemented a microservices architecture with MVC and SOLID principles, achieving a functional chatbot based on good practices.
                                    </p>
                                    </div>
                                </li>
                                <li className='ml-6' style={{
                                   height:"fit-content",
                                   padding:"10px"
                                }
                                }>
                                    <span style={{
                                        backgroundColor:"blueviolet",
                                        borderRadius:"50%",
                                        padding:"10px",
                                        marginLeft:"-20px"
                                    }}>
                                        <GrPersonalComputer size={20}></GrPersonalComputer>
                                    </span>
                                    <div className='d-flex flex-column' style={{
                                         borderLeft:"1px solid gray",
                                         height:"max-content",
                                         paddingLeft:"40px"
                                    }}>
                                    <h3 className='h5 py-2' style={{
                                        color:"rgba(187, 175, 169, 1)",
                                        
                                    }}>
                                        Data analyst & trader / Chile
                                    </h3>
                                        <span className="text-primary h4">
                                        🏛 Cryptobox Investments
                                        </span>
                                    <p style={{color:"gray"}}>
                                        April 2022 to August 2023
                                    </p>
                                    <p style={{
                                        width:"700px"
                                    }}>
                                    Analyzed the cryptocurrency market, and computer hardware improving net income in the purchase and sale of resources in
                                    mining equipment by 32% based on trend criteria and demand for digital assets (crypto assets), helping to the brand grow
                                    </p>
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
                <Education></Education>
            </section>
    );
};

export default Experience;