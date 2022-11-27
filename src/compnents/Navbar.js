import React from "react";
import Logo from "../media/logo1.png";
import { Link } from "react-scroll";
import "../CSS/home.css";
import { motion } from "framer-motion";
import Menu from "./Menu";
let Anim = {
  hidden: {
    opacity: "0%",
    transform: "translateY(-40px)",
  },
  visible: {
    opacity: "100%",
    transform: "translateY(0px)",
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    opacity: "0%",
    transform: "translateY(-40px)",
    transition: {
      duration: 0.7,
    },
  },
};
const Navbar = () => {
  return (
    <motion.div
      variants={Anim}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container-fluid navbar-div-main p-2 fixed-top"
    >
      <div className="row align-items-center">
        <div className="col-2">
          <div className=" bg-light">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="large-screen-links">
            <ul className="nav justify-content-end">
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="hero"
                  className="nav-link"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="about"
                  className="nav-link"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="services"
                  className="nav-link"
                >
                  SERVICES
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="projects"
                  className="nav-link"
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="team"
                  className="nav-link"
                >
                  TEAM
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="contact"
                  className="nav-link"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="small-screen-buger justify-content-end">
            <Menu/>
            {/* <IconButton colorScheme="#009cff" className="icon-button" borderRadius="0px" mr="3" icon={<ImMenu color="#22395d" size={30} />} /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
