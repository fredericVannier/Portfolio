import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import About from "../Pages/About";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-nav">
          <img src="./Logo2020.svg" alt="FV logo" />
        </div>
        <div className="nav-container">
          <div className="nav-section">
            <p className="section-name">Home</p>
          </div>
          <Link
            activeClass="active"
            to="about-main-container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="nav-section">
              <p className="section-name">About</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="projects-main-container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="nav-section">
              <p className="section-name">Projects</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="contact-main-container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="nav-section">
              <p className="section-name">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
