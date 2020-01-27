import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-scroll";

export class Home extends Component {
  state = {
    active: false
  };

  toggleMenu = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div className="main-container">
        <Link to="" onClick={() => this.toggleMenu()}>
          <Navbar />
        </Link>

        <div className="home-container img-background">
          <div className="img-background">
            <div className="greet-title">
              <p className="home-title">
                Hi<span>,</span> I'm
                <br /> Frederic<span>.</span>
              </p>
            </div>
          </div>
        </div>

        <Link
          activeClass="active"
          to="about-main-container"
          spy={true}
          smooth={true}
          duration={600}
        >
          <div className="transition-container">
            <div
              className={
                this.state.active
                  ? "transition-section open"
                  : "transition-section"
              }
            >
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
