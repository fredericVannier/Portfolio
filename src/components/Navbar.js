import React, { Component } from "react";
import { Link } from "react-scroll";

export class Navbar extends Component {
  state = {
    active: false
  };

  toggleMenu = () => {
    this.setState({ active: !this.state.active });
  };

  redirectAbout = () => {};

  render() {
    return (
      <div className="navbar">
        <div className="menu-btn">
          <span
            className={
              this.state.active ? "menu-btn-burger open" : "menu-btn-burger"
            }
            onClick={() => this.toggleMenu()}
          ></span>
        </div>

        <div className="logo-nav">
          <img src="./Logo2020.svg" alt="FV logo" />
        </div>
        <div
          className={this.state.active ? "nav-container open" : "nav-container"}
          onClick={() => this.toggleMenu()}
        >
          <div
            className={this.state.active ? "nav-section open" : "nav-section"}
            onClick={() => this.toggleMenu()}
          >
            <p className="section-name">Home</p>
          </div>
          <Link
            activeClass="active"
            to="about-main-container"
            spy={true}
            smooth={true}
            duration={600}
          >
            <div
              className={this.state.active ? "nav-section open" : "nav-section"}
              onClick={() => this.toggleMenu()}
            >
              <p className="section-name">About</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="projects-section"
            spy={true}
            smooth={true}
            duration={600}
          >
            <div
              className={this.state.active ? "nav-section open" : "nav-section"}
              onClick={() => this.toggleMenu()}
            >
              <p className="section-name">Projects</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="contact-main-container"
            spy={true}
            smooth={true}
            duration={600}
          >
            <div
              className={this.state.active ? "nav-section open" : "nav-section"}
              onClick={() => this.toggleMenu()}
            >
              <p className="section-name">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
