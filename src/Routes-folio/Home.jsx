//una vez se crea un elemento a través de un componente, se renderiza
//Lo que hace que se pueda crear dicho elemento (de la ruta) en el DOM virtual
//Ejemplo de componente //
// const home = () => <h1>Home</h1> ; dónde home es el componente y el h1 es el elemento a renderizarse.

// import { useEffect, useState } from 'react';
import { JamGithub, LogosGoogleCalendar, LogosLinkedinIcon, OuiCalendar } from '../assets/langs/array.icons';
// import data from '../data.json';
import AboutMe from './Components/AboutMe';
import { FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
// import Services from './Components/Services';
import Contact from './Components/Contact';

// import { GrWhatsapp } from 'react-icons/gr';


function Home() {

   
    // const words = data[5].spain.campo
    // const [time, setTime] = useState(0)

    // useEffect(() => {
    //     const handle = () => {
       
    //       setTimeout(() => {
    //         console.log(`se reitera correctamente ${time}`);
    //         setTime((time) => time === words.length - 1 ? 0 : time + 1);
    //       }, 6000);
     
    // }
    //     handle();
      
    //     return () => clearTimeout(handle);
        
    //   }, [time, words.length]);
   
    return (
        <section className='d-flex flex-column m-auto border border-1 border-dark pb-5 rounded-5'>
                <h1 className='text-intro py-0 text-center'>
                   Hello! Welcome to my personal showcase
                </h1>
                <div className='d-flex justify-content-center gap-3'>
                    <span className='mx-2 h4'>Im a web developer </span>
                   {/* <span className='t-animated h4 text-center m-0 px-0'>
                    {words[time]}
                    </span>  */}
                </div>
                {/* <button onClick={handle}>button</button> */}
            <div className="container d-flex justify-content-center align-items-center h-100 py-2 m-auto">
                <section className='h-100 w-25'>
                   <div className='row p-3'>
                    <div className="box-appoint h-50 col-12  mx-0 px-0">
                        <h5 className='text-center mt-3 h4'>Lets appointment <br /> setters! 🎉</h5>
                        <OuiCalendar className='py-3 my-3'></OuiCalendar>
                    <div className='text-start w-100 h-100 px-2'>
                        <p className='h6'>powered by <LogosGoogleCalendar></LogosGoogleCalendar></p>
                    </div>
                    </div>
                   <div className='row g-2 m-auto py-2'>
                   <div className=" col-6 w-50 p-0">
                        <button className='btn btn-outline-success  d-flex justify-content-around p-2 align-items-center gap-2'><FaWhatsapp size={30} /> Whatsapp</button>
                    </div>
                    <div className=" col-6 w-50">
                    <button className='btn btn-outline-light d-flex justify-content-center p-2 align-items-center gap-2 w-100 text-center'><BiLogoGmail size={30} /> Gmail</button>
                    </div>
                   </div>
                   </div>
                </section>
                <section className="card-profile gap-2 w-25 mx-2">
                </section>
                <section className='container-fluid m-auto w-50 h-100 py-0'>
                {/* <div className='container'> */}
                    <div className='row h-auto gx-3 w-100'>
                        <article className='card-about col-12 mb-3' style={{
                            width:"100%",
                            height:"30vh",
                            padding:"20px",
                            borderRadius:"10px",
                            overflowY:"hidden"
                        }
                        }>
                           <h6> ABOUT ME</h6>
                           <div className="about-scope">
            <p>
                Hello, my name is Kevin but you can call me Kev. <br /> <strong className='text-intro' style={{fontSize:"18px"}}>¿who I am?</strong>
             <br />   Full-stack web developer from Chile 📌, from early on I ventured to dismantle mechanisms, see how digital games worked and better understand the logic behind them...
            </p>
            <a href="#about">
                <button className='btn-see'>
                    🙂<br />
                    <br />
                    
                    see more
                </button>
                    </a>
        </div>
                        </article>
                    <div className='row gap-3 h-100 m-auto w-100 px-0'>
                        <div className='profile-box bg-dark col' style={{background:""}}>
                            <JamGithub></JamGithub>
                        </div>
                        <div className='profile-box col bg-primary' style={{
                            backgroundImage: "linear-gradient(120deg, rgb(4, 122, 190,0.4) 70%, rgb(4, 122, 190,0.3 ) 80%), url('../src/assets/mosaicolinked.png')",
                            backgroundSize:"cover"
                        }} >
                            <LogosLinkedinIcon></LogosLinkedinIcon>
                        </div>
                        <div className='profile-box col d-flex flex-column gap-2'>
                            <button className='btn-spn-cv'>
                               <a href="https://drive.google.com/file/d/1Ev6io_qTxjYFzj-UQ5ic79MojR88eK8Z/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Spanish CV</a>
                            </button>
                            <button className='btn-eng-cv'>
                                English CV
                            </button>
                        </div>
                    </div>
                    </div>
                {/* </div> */}
                </section>
            </div>
            <AboutMe/>
            <Contact/>
        </section>
    );

}

export default Home