import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div className="projects-main-container">
        <div className="projects-section">
          <div className="project">
            <div>
              <img src="./spaceExplorer.png" id="project-picture1" alt="space-explorer"/>
            </div>
            <div className="project-informations">
              <h3 className="project-title">Space Explorer</h3>
              <p className="project-details">
                Space Explorer is a 2D space shooter game made with javascript.{" "}
                <br />
                <br />
                The goal of this project was to work with object-oriented
                programming and basic javascript methods.
              </p>
              <div className="links-section">
                <a
                  href="https://fred011.github.io/Space-Explorer/"
                  className="project-links"
                  target="_blank"
                >
                  PLAY
                </a>
                <a
                  href="https://github.com/Fred011/Space-Explorer"
                  className="project-links"
                  target="_blank"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
          <div id="project-picture2"></div>
          <div id="project-picture3"></div>
        </div>

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
