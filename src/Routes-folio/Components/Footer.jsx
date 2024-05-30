import { NavLink } from "react-router-dom";
import logo from "../../assets/profileLogo.webp";

const Footer = () => {
    return (
        <footer className="d-flex flex-column w-100 h-20 py-3 mt-2" style={{fontWeight:"lighter"}}>
            <section className="footer-section container w-100 p-3 px-5">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex gap-3">
                    <span>
                        <NavLink className="nav-link" to="/projects">
                            projects
                        </NavLink>
                    </span>
                    <span>
                        <NavLink className="nav-link" to="/experience">
                            experience
                        </NavLink>
                    </span>
                    <span>
                        <NavLink className="nav-link" to="/blog">
                            blog
                        </NavLink>
                    </span>
                </div>
                <div>
                    <h6 style={{fontSize:"13px", fontWeight:"lighter" }}>Do you want programming challenges and explore new technological trends? </h6>
                    <h6>Join my group on Discord! <strong className="text-intro" style={{fontSize:"14px"}}>Open invitations!</strong></h6>
                </div>
              </div>
            </section>
            <section className="d-flex flex-row justify-content-center text-center pt-3">
                <div className="d-flex flex-column text-center">
                <h6 style={{
                fontSize:"16px",
                 marginTop:"20px",
                 marginLeft:"10px",
                 fontStyle:"italic", 
                 fontWeight:"400", 
                 width:"100%"}}>Made with creativity and efforts by <strong style={{color:"#70c5f7"}}>Kevin Lugo</strong> </h6>
                <h6 style={{
                fontSize:"13px", 
                marginTop:"0px", 
                color:"whitesmoke", 
                fontWeight:"300",
                fontStyle:"italic"}}>Kevin Alfonso Lugo Berrios / portfolio 2024</h6>
                </div>
                  <span className="">
                    <img src={logo} style={{width:"40px", height:"fit-content", marginLeft:"10px",marginTop:"5px", backgroundColor:"#181717", borderRadius:"50%"}} alt="" />
                </span>
            </section>
        </footer>
    );
};

export default Footer;