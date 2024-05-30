
import { NavLink } from "react-router-dom";
import logo from "../../assets/profileLogo.webp";
// import ThemeToggle from "../Components/ThemeToggle";
import ReactSwitch from "react-switch";

function Header(){

return(
    <>
    <header className="header-bar w-100 h-20 pb-4">
  <nav className="navbar container w-100 navbar-expand-lg px-5">
  <div className="navbar-brand" >
  <NavLink to="/">
<img src={logo} style={
              {
                  width: "50px",
                  borderRadius: "50%",
                  marginLeft:"3px",
                  marginBottom:"8px",
                  paddingBottom:"0px"
              }
          
          } alt="logo" />
</NavLink>

    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav w-100 mx-2 d-flex justify-content-center gap-2">
      <li className="nav-item active">
        <NavLink to="/">
        <span className="nav-link text-light mx-4" >Home</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/experience" >
        <span className="nav-link text-light">Experience</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/projects" className="">
                <span className="nav-link text-light">projects</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/skills" className="">
                <span className="nav-link text-light">techskill</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/blog" className="">
                <span className="nav-link text-light">blog</span>
        </NavLink>
      </li>
    </ul>
    <li className="nav-item dropdown">
        <a className="nav-link text-light dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="mx-2">
          select
            </span>
            <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path fill="#2e3192" d="M38 54h16c1.977 0 3.657-.446 5.052-1.223L38 40.219zm25.66-7.79c.228-1.017.344-2.094.344-3.211v-5h-14.11l13.762 8.211M.35 17.759A14.635 14.635 0 0 0 0 21v5h14.164zM26 10H10c-1.963 0-3.632.44-5.021 1.206L26 23.746zM5.043 52.826C6.419 53.57 8.066 54 10 54h16V40.324zM0 38v5c0 1.151.122 2.26.363 3.303L14.282 38zm59.115-26.745C57.709 10.457 56.006 10 54 10H38v13.851zM64 26v-5c0-1.094-.113-2.149-.332-3.147L50.012 26z"/>
    <path fill="#e6e7e8" d="m50.012 26l13.656-8.147c-.626-2.864-2.15-5.235-4.553-6.598L38 23.851V10h-2v18h28v-2zM0 36v2h14.282L.363 46.303c.661 2.855 2.231 5.199 4.68 6.523L26 40.324V54h2V36zm64 0H36v18h2V40.219l21.052 12.559c2.421-1.348 3.964-3.706 4.604-6.566L49.894 38H64zM26 10v13.746L4.979 11.206C2.549 12.546.996 14.9.349 17.759L14.164 26H0v2h28V10z"/>
    <path fill="#be1e2d" d="M36 28V10h-8v18H0v8h28v18h8V36h28v-8z"/>
    <path fill="#be1e2d" d="M21.938 26L1.888 14.031c-.431.64-.777 1.344-1.063 2.094L17.372 26h4.563M63.09 48.09L46.277 38h-4.656l20.313 12.219a9.866 9.866 0 0 0 1.156-2.125m-2.371-35.703L37.969 26l4.619.003L62.219 14.25c-.438-.797-.9-1.311-1.5-1.859M1.813 49.875a8.996 8.996 0 0 0 1.609 1.844L26.063 38H21.5z"/>
    </svg>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <ReactSwitch checked={false}></ReactSwitch>
  </div>
</nav>
    </header>
    </>
)
}

export default Header;