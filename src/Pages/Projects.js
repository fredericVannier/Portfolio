import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div className="projects-main-container">
        <div className="projects-section">
          <div id="project-picture1"></div>
          <div id="project-picture2"></div>
          <div id="project-picture3"></div>
        </div>

        <div className="projects-bkg"></div>

        <div className="transition-container project-transition">
            <div className="transition-section">
              <p className="transition-text">Wanna talk?</p>
              <img src="./arrow-down.svg" className="slide-top" alt="arrow" />
            </div>
          </div>
      </div>
    );
  }
}

export default Projects;
