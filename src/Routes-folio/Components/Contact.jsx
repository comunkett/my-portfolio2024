import {  WhhPython } from '../../assets/langs/array.icons';
import Form from './Form';
import { TbBrandJavascript, TbSql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiAirtable } from "react-icons/si";
import { TiArrowSortedDown } from "react-icons/ti";
import fondo1 from '../../assets/newfondo1.jpeg';

const Contact = () => {

    const arrayLogos = [
        "https://firebasestorage.googleapis.com/v0/b/dataimage-84486.appspot.com/o/logoempresas%2FupworkLogo.png?alt=media&token=86d594df-991c-4007-9f2d-e4f3f86d83be",
        "https://firebasestorage.googleapis.com/v0/b/dataimage-84486.appspot.com/o/logoempresas%2Fgolalogo.png?alt=media&token=fe9aee19-8501-4669-a336-0a96798c9de4",
        "https://firebasestorage.googleapis.com/v0/b/dataimage-84486.appspot.com/o/logoempresas%2Fcontralogo-removebg-preview.png?alt=media&token=89065cd0-9e49-4bd4-8373-845079ee7204"
    ]

    return (
        <div className='m-0 d-flex flex-column justify-content-center align-items-center'>
                <div className='container py-5 d-flex align-items-center'>
                <div className='p-5'>
                <p className="text-outter text-center" style={{width:"100%", fontSize:"35px", lineHeight:"45px", marginBottom:"120px"}}>
                    &quot;I am currently learning, advancing on my path as a full stack programmer, IT project manager and creator of valuable content.
                    &quot; <br />
                </p>
                    <p style={{fontSize:"23px", fontStyle:"italic"}}> kevdev-11 <strong style={{color:'lightblue'}}>/github</strong></p>
                </div>
                <div className=''>
                    <img src={fondo1} style={{width:"400px", mask:"linear-gradient( 90deg, transparent, black 40%)", filter:"grayscale(0.5)", borderRadius:"30px"}} alt="img-profiles" />
                </div>
                </div>
            <div className='container'>
            <div  className='text-init' >
            <h6 className='px-2 m-auto'>On services / contact</h6>     
                <span className='point'>
                    </span>
                    </div>
                <h1 className='text-middle' 
                style={{ fontSize: "35px", 
                marginTop: "-5px", 
                width:"80%", 
                marginBottom:"40px" }}>You could contact me to more details <br /> As project manager I could make your request easy</h1>
               <div className='d-flex w-100'>
               <Form></Form>
               <div className='d-flex flex-column w-100'>
               <div className='d-flex'>
                   <div className='fan-service'>
                   <div className='w-25 p-2 mt-2'>
                     <h5 style={{borderRight:"1px solid white", padding:"10px" }}>Many projects with mass skills, into <br />code</h5>
                   </div>
                    <div className='d-flex justify-content-center gap-3 align-items-center w-100 p-3 mt-2' >
                        <span>
                                <WhhPython width="50px"/>
                        </span>
                            <span>
                                <TbBrandJavascript size={70} style={{filter:"grayscale(100%)", opacity:"0.8"}}/>
                            </span>
                            <span>
                                <FaReact size={60} style={{filter:"grayscale(100%)", opacity:"0.7"}}/>
                            </span>
                            <span>
                                <FaWordpress size={50} style={{filter:"grayscale(100%)", opacity:"0.5"}}/>
                            </span>
                            <span>
                                <FaGitAlt size={60} style={{filter:"grayscale(100%)", opacity:"0.3"}}/>
                            </span>
                            <span>
                            <TbSql size={50} style={{filter:"grayscale(100%)", opacity:"0.2"}}/>
                            </span>
                            <span>
                                <SiAirtable size={60} style={{filter:"grayscale(100%)", opacity:"0.1"}}/>
                            </span>
                            <span>
                                <button className='btn btn-secondary border border-1 border-secondary mx-3'>
                                    +   
                                </button>
                            </span>
                    </div>
                   </div>
               </div>
               <div className='border border-1 border-danger'></div>
                   <div className='w-100 text-center' style={{backgroundColor:"#181717"}}>
                    <h3 className='py-3' style={{borderBottom:"1px solid blueviolet",width:"100%",margin:"auto"}}>FAQ&apos;s SERVICES</h3>
        <article className="">
            <div>
            <button className="toggle-faq" data-bs-toggle="collapse" href="#firstquest" role="button" aria-expanded="false" aria-controls="firstquest">
                <h5 className='w-100'>¿What services can I offer you?</h5>
                <span className='d-flex justify-content-center align-content-center h-fit-content'><TiArrowSortedDown/></span>
            </button>
            </div>
            <div className="row">
                <div className="col">
    <div className="collapse multi-collapse" id="firstquest">
      <div className="card bg-black rounded-0 p-4">
        {/* <div className='d-flex flex-row justify-content-between align-items-center'> */}
           <section className='row text-dark'>
            <div className="col">
                <img style={{width:"120px", backgroundColor:"#D0FFB2", padding:"10px", borderRadius:"5px"}} src={arrayLogos[0]} alt="" />
            </div>
            <div className="col">
            <img style={{width:"120px", padding:"7px", borderRadius:"5px", backgroundColor:"#B2CDFF"}} src={arrayLogos[1]} alt="" />
            </div>
            <div className="col">
            <img style={{width:"100px", padding:"10px", borderRadius:"5px", backgroundColor:"yellow"}} src={arrayLogos[2]} alt="" />
            </div>
            <section className='row text-light mx-0 g-3 w-100 '>
            <div className="col" style={{borderRight:"1px solid white"}}>
                <h4 className='text-success'>Upwork services</h4>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <p>If your want to see more in details: <a href="http://" target="_blank" rel="noopener noreferrer">click here</a></p>
            </div>
            <div className="col" style={{borderRight:"1px solid white"}}>
                <h4 className='text-primary'>Golance services</h4>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <p>If your want to see more in details: <a href="http://" target="_blank" rel="noopener noreferrer">click here</a></p>
            </div>
            <div className="col">
                <h4 className='text-warning'>Contra services</h4>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <li style={{listStyle:"inside"}}>
                    Lastname
                </li>
                <p>If your want to see more in details: <a href="http://" target="_blank" rel="noopener noreferrer">click here</a></p>
            </div>
            </section>
            <section>

            </section>
           </section>
        {/* </div> */}
      </div>
    </div>
  </div>
  </div>
            </article>
        <article>
            <div>
            <button className="toggle-faq" data-bs-toggle="collapse" href="#secondquest" role="button" aria-expanded="false" aria-controls="secondquest">
                <h5 className='w-100'>Do these services have a cost?</h5>
                <span className='d-flex justify-content-center align-content-center h-fit-content'><TiArrowSortedDown/></span>
            </button>
            </div>
            <div className="row">
                <div className="col">
    <div className="collapse multi-collapse" id="secondquest">
      <div className="card bg-black rounded-0 p-4">
        <div className='d-flex flex-row justify-content-center align-items-center text-light'>
         <div className='col text-start' style={{borderRight:"1px solid whitesmoke"}}>
        <strong className='text-info'>Yielding:</strong> Every project is subject to the complexity of carrying it out within the agreed time, requirements, and many other factors.
            <br />The costs are visible on my Upwork, Golance and Contra profiles.
         </div>
         <div className='col text-start px-2 mx-3 border border-1 border-secondary'>
         <strong className='text-info'> Condition</strong> If you have seen my services, you want to contact me, just do it, the only condition is that your project is successful: <a href="">contact me</a>
         </div>
        </div>
      </div>
    </div>
  </div>
  </div>
            </article>
        <article className="">
            <div>
            <button className="toggle-faq" data-bs-toggle="collapse" href="#thirdquest" role="button" aria-expanded="false" aria-controls="thirdquest">
                <h6 className='w-100'>Do you use technology such as artificial intelligence, cloud, and microservices for businesses?</h6>
                <span className='d-flex justify-content-center align-content-center h-fit-content'><TiArrowSortedDown/></span>
            </button>
            </div>
            <div className="row">
                <div className="col">
    <div className="collapse multi-collapse" id="thirdquest">
      <div className="card bg-black rounded-0 p-4">
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <p className='text-light'>
            <strong className='text-info'>Yes,</strong> I am currently still learning AWS, Docker, Kubernetes, and I am quickly learning everything related to artificial intelligence, networks and blockchain in a very easy way.
            </p>
        </div>
      </div>
    </div>
  </div>
  </div>
            </article>
                   </div>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Contact;