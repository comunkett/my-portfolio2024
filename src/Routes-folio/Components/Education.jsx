import academlo from '../../assets/academlo.png'
import fullstack from '../../assets/certify/fullstacks.png'
import backend from '../../assets/certify/backends.png'

const Education = () => {
    return (
        <section className="container d-flex flex-column justify-content-center py-5">
            <h1 className="text-intro text-center">
                Education
            </h1>
            <p className='text-center text-white-50 py-2'>
            A quality education is what often marks the destiny of the individual, 
            therefore the foundations of a good <br />education are the rudder of a ship that will reach a successful port...
             lets keep learning
            </p>
            <article className="sec-edu" id="education">
            <div>
            <button className="toggle-edu" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                <h5>FULL-STACK WEB DEVELOPER</h5>
                <h5>+</h5>
            </button>
            </div>
            <div className="row">
                <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card bg-dark rounded-0 p-4">
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <div className='contain-img-edu'>
                <img style={{width:"80px", padding:"5px", marginLeft:"0px", backgroundColor:""}} src={academlo} alt="academlo" />
            </div>
            <div className='text-light'>
                <h5 style={{marginTop:"10px"}}>Academlo Bootcamp School</h5>
                <span>
                    06/2022 ~ 01/2024
                </span>
                <p>graduate of the Computer Science program</p>
            </div>
            <div className='certify-mark'>
                <img style={{width:"110px", height:"70px", padding:"5px"}} src={fullstack} alt="" />
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
            </article>
            <article className="sec-edu" id="education">
            <div>
            <button className="toggle-edu" data-bs-toggle="collapse" href="#toggletwo" role="button" aria-expanded="false" aria-controls="toggletwo">
                <h5>BACK-END WEB DEVELOPER</h5>
                <h5>+</h5>
            </button>
            </div>
            <div className="row">
                <div className="col">
    <div className="collapse multi-collapse" id="toggletwo">
      <div className="card bg-dark rounded-0 p-4">
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <div className='contain-img-edu'>
                <img style={{width:"80px", padding:"5px", marginLeft:"0px", backgroundColor:""}} src={academlo} alt="academlo" />
            </div>
            <div className='text-light'>
                <h5 style={{marginTop:"10px"}}>Academlo Bootcamp School</h5>
                <span>
                    07/2023 ~ 12/2023
                </span>
                <p>graduate of the Computer Science GEN-30</p>
            </div>
            <div className='certify-mark'>
                <img style={{width:"110px", height:"70px", padding:"5px"}} src={backend} alt="" />
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
            </article>
            <article className="sec-edu" id="education">
            <div>
            <button className="toggle-edu" data-bs-toggle="collapse" href="#togglethird" role="button" aria-expanded="false" aria-controls="togglethird">
                <h5>FRONT-END WEB DEVELOPER</h5>
                <h5>+</h5>
            </button>
            </div>
            <div className="row">
                <div className="col">
    <div className="collapse multi-collapse" id="togglethird">
      <div className="card bg-dark rounded-0 p-4">
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <div className='contain-img-edu'>
                <img style={{width:"80px", padding:"5px", marginLeft:"0px", backgroundColor:""}} src={academlo} alt="academlo" />
            </div>
            <div className='text-light'>
                <h5 style={{marginTop:"10px"}}>Academlo Bootcamp School</h5>
                <span>
                    09/2022 ~ 01/2023
                </span>
                <p>graduate of the Computer Science GEN-30</p>
            </div>
            <div className='certify-mark'>
                <img style={{width:"110px", height:"70px", padding:"5px"}} src={backend} alt="" />
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
            </article>
            <article className="sec-edu" id="education">
            <div>
            <button className="toggle-edu" data-bs-toggle="collapse" href="#togglefour" role="button" aria-expanded="false" aria-controls="togglefour">
                <h5>FUNDAMENTALS OF SCIENCE COMPUTER</h5>
                <h5>+</h5>
            </button>
            </div>
            <div className="row">
                <div className="col">
    <div className="collapse multi-collapse" id="togglefour">
      <div className="card bg-dark rounded-0 p-4">
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <div className='contain-img-edu'>
                <img style={{width:"80px", padding:"5px", marginLeft:"0px", backgroundColor:""}} src={academlo} alt="academlo" />
            </div>
            <div className='text-light'>
                <h5 style={{marginTop:"10px"}}>Academlo Bootcamp School</h5>
                <span>
                    06/2022 ~ 09/2022
                </span>
                <p>graduate of the Computer Science GEN-30</p>
            </div>
            <div className='certify-mark'>
                <img style={{width:"110px", height:"70px", padding:"5px"}} src={backend} alt="" />
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
            </article>
        </section>
    );
};

export default Education;