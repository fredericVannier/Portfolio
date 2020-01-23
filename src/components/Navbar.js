import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <div className="logo-nav">
            <img src="./Logo2020.svg" alt="FV logo" />
          </div>
        <div className="nav-container">
          <div className="nav-section">
            <p>Home</p>
          </div>
          <div className="nav-section">
            <p>About</p>
          </div>
          <div className="nav-section">
            <p>Projects</p>
          </div>
          <div className="nav-section">
            <p>Contact</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
