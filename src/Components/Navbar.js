import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/albright-logo.jpg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={logo} alt="Albright Clinic Logo" className="navbar-logo" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <NavLink to="/" className="navbar-links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="navbar-links">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-links">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar-links">
            Contact
          </NavLink>
        </li>
      </ul>

      <Link to="/appointment" className="navbar-btn-link">
        <button
          className="navbar-btn"
          type="button"
        >
          BOOK APPOINTMENT
        </button>
      </Link>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <NavLink onClick={openNav} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openNav} to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openNav} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openNav} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openNav} to="/appointment">
              Book Appointment
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
