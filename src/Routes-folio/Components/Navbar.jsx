import { NavLink } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";
import { GrPersonalComputer } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
// import { MdMenuBook } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { motion } from "framer-motion";
import { useState } from "react";

function Nav() {
 
  const [navbar, setNavbar] = useState(false);

//   const dragStart = (event) => {
        
//     event.dataTransfer.setData("navbar", event.target.id);
//     console.log(event.target.id);
// }

  return (
    <section className="navui">
      {navbar ? (
        <motion.nav
          initial={{ width: "fit-content" }}
          whileHover={{
            width: "auto",
            transition: {
              duration: 2,
              type: "spring",
              stiffness: 500,
              damping: 10,
            },
          }}
          className="navbar"
          id="draggable"
        >
          <ul className="navbar-bar d-flex flex-column rounded-2 px-2 mx-0 h-100 w-100 justify-content-start gap-2">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <HiHomeModern className="icons" size={42} />
                <span className="link-text">my profile</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/projects" className="nav-link">
                <GrPersonalComputer className="icons" size={42} />
                <span className="link-text">projects</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/skills" className="nav-link">
                <GiSkills className="icons" size={42} />
                <span className="link-text">skills</span>
              </NavLink>
            </li>
            {/* <li className="nav-item ">
              <NavLink to="/experience" className="nav-link">
                <MdMenuBook className="icons" size={42} />
                <span className="link-text">reviews</span>
              </NavLink>
            </li> */}
            <li className="nav-item ">
              <NavLink to="/contact" className="nav-link">
                <MdContactPhone className="icons" size={42} />
                <span className="link-text">contact</span>
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      ) : (
        <nav className="w-0"></nav>
      )}
      <button
        type="button"
        data-bs-toggle="tooltip-arrow"
        data-bs-placement="top"
        title="Menú"
        onClick={() => setNavbar(!navbar)}
        className="cancel_nav"
      >
        {navbar === false ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              rotateZ: -360,
              opacity: [0, 1],
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 3,
              type: "spring",
              stiffness: 30,
              damping: 10,
            }}
          >
            <CgMenuGridR
              className="d-flex position-absolute 
      bg-dark 
      rounded-end-circle p-2"
              size={45}
              fill="#d33c3c"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              rotate: 360,
              opacity: [0, 1],
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 30,
              damping: 10,
            }}
          >
            <MdOutlineCancel
              className="d-flex position-absolute bg-dark rounded-end-circle p-2"
              size={45}
            />
          </motion.div>
        )}
      </button>
    </section>
  );
}

export default Nav;
