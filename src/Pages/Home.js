import React, { Component } from "react";
// import Navbar from "../components/Navbar";

export class Home extends Component {
  render() {
    return (
      <div className="main-container">
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

        {/* <Navbar /> */}
        <div className="home-container img-background">
          {/* <div className="img-background"> */}
          {/* <img src="./WEBDEV.svg" alt="background-image" /> */}
          {/* </div> */}
          <div className="greet-title">
            <p className="home-title">
              Hi<span>,</span> I'm Frederic<span>.</span>
            </p>
          </div>
        </div>

        <div className="transition-container">
          <div className="transition-section">
            <p className="transition-text">Learn more about me</p>
            <img src="./arrow-down.svg" className="slide-top" alt="arrow" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
