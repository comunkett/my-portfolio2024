
// import fondo from '../../assets/kevlogo5.png'
import {  JamGithub, LogosLinkedinIcon } from '../../assets/langs/array.icons';
import { TfiWorld } from "react-icons/tfi";

const Reviewers = ({refs}) => {
 
  console.log(refs);

    return (
        <section className='d-flex h-100 w-100'>
    <div className="card d-flex bg-transparent border-none container w-100 p-0">
        <div className=' d-flex justify-content-center'>
    <img className="img-reviewer" src={refs.img} alt="Card image cap"/>
        </div>
    <div className="card-body">
      <h5 className="card-title w-100  text-center text-light">{refs.name}{" "}{refs.surname}</h5>
      <span className='text-center'><h6 className='text-info'>{refs.ref}</h6></span>
      <p className="card-text py-0 text-center" style={{color:"lightblue", fontSize:"16px", textAlign:"right"}}>
        &quot; {refs.dsc} &quot;
      </p>
    </div>
    <div className="card-footer text-center">
        <a href={refs.links?.other}>
      <TfiWorld style={{width:"20px", marginTop:"-30px", marginRight:"10px", color:"whitesmoke"}} />
        </a>
        <a href={refs.links?.git}>
      <JamGithub style={{width:"20px", marginTop:"-30px"}}></JamGithub>
        </a>
        <a href={refs.links?.in}>
      <LogosLinkedinIcon style={{width:"20px", marginTop:"-30px", marginLeft:"10px"}}></LogosLinkedinIcon>
        </a>
      
    </div>
  </div>            
        </section>
    );
};

export default Reviewers;