import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
//import Dropdownourprojectandpartners from "./Dropdownourprojectandpartners";
//import Dropdownmembership from "./Dropdownmembership";
//import Dropdownevents from "./Dropdownevents";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const [dropdownourprojectandpartners, setDropdown] = useState(false);
  // const [dropdownmembership, setDropdown] = useState(false);
  // const [dropdownevents, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Kaimosi Rotary Club
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="" className="nav-links" onClick={closeMobileMenu}>
              About Us <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/stories" className="nav-links" onClick={closeMobileMenu}>
              Stories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-links" onClick={closeMobileMenu}>
              Our Projects & Partners <i className="fas fa-caret-down" />
            </Link>
            {/*  {dropdownourprojectandpartners && <Dropdownourprojectandpartners />}*/}
          </li>
          <li className="nav-item">
            <Link to="" className="nav-links" onClick={closeMobileMenu}>
              Membership <i className="fas fa-caret-down" />
            </Link>
            {/*  {dropdownmembership && <Dropdownmembership />}*/}
          </li>
          <li className="nav-item">
            <Link
              to="/projectsection"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Project Section
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Events <i className="fas fa-caret-down" />
            </Link>
            {/* {dropdownevents && <Dropdownevents />} */}
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
