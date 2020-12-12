import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const menuToggle = () => setMenuClick(!menuClick);
  const closeMenu = () => setMenuClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            CAMP <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon">
            <i
              className={menuClick ? "fas fa-times" : "fas fa-bars"}
              onClick={menuToggle}
            />
          </div>
          <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/Home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/About" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/Services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/Contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links-mobile"
                to="/SignUp"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
