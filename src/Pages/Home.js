import React, { Component } from "react";
import Navbar from "../components/Navbar";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import { Link, animateScroll as scroll } from "react-scroll";

export class Home extends Component {
  smoothScroll = (target, duration) => {
    console.log("Helloooooo!");
  };

  render() {
    return (
      <div className="main-container">
        <Navbar />

        <div className="home-container img-background">
          <div className="img-background">
            {/* <img src="./webdev5_animated.svg" className='path' alt="background-image"/> */}
            <div className="greet-title">
              <p className="home-title">
                Hi<span>,</span> I'm Frederic<span>.</span>
              </p>
            </div>
          </div>
        </div>

        <Link
          activeClass="active"
          to="about-main-container"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div className="transition-container">
            <div className="transition-section">
              <p className="transition-text">Learn more about me</p>
              <img src="./arrow-down.svg" className="slide-top" alt="arrow" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
