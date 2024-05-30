import { Link } from 'react-router-dom';
// import data from '../../data.json';
import { FaGithubSquare } from "react-icons/fa";


const CardsProject = ({ urlImg, title, description, stack, fold }) => {

  return (
    <section className='cardset'>
      <article
        className="card bg-dark rounded-3 p-1 m-auto w-100"
        style={{ width: "17rem", backgroundColor: "black"}}>
        <div className=' w-auto position-relative'>    
            <img src={urlImg} className="card-img-top" alt="..." />
                <div className='badges'>
            <h5 className='font-weight-bold'>Technologies</h5>
            <div className='d-flex justify-content-center flex-wrap'>
                {stack.map((tech, index)=> (
                    <span key={index} className="badge bg-dark m-1">{tech}</span>
                ))}
            </div>
                </div>
        </div>
        <div className="card-body">
          <div style={{ marginTop: "-25px", zIndex:"3", position:"relative", marginBottom:"15px" }}>
            <h2
              className="card-title text-white text-center p-3 rounded-4"
              style={{
                fontSize: "1rem",
                backgroundColor: "rgba(39,35,59)"
              }}
            >
              {title}
            </h2>
          </div>
          <div>
            <p
              className="card-text m-auto"
              style={{ minHeight: "80px", fontSize:"14px", color:"#b6b6b6" }}
            >
              {description.slice(0, 100)}
            </p>
          </div>
          <hr />
          <div className="d-flex w-100">
            <button className="button-git"
            style={{fontFamily:"Courier New', Courier, monospace", fontWeight:"300", letterSpacing:"1px"}}>
                <FaGithubSquare size={25}></FaGithubSquare> github
            </button>
            <button className="button-proy"
            style={{fontFamily:"Courier New', Courier, monospace", fontWeight:"400", letterSpacing:"1px"}}>
            <Link to={`/projects/${fold}`} style={{textDecoration:"none", color:"whitesmoke"}}>
                see more
            </Link>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default CardsProject;
