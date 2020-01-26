import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div className="projects-main-container">
        <div className="projects-section">
          <div className="project">
            <a
              href="https://fred011.github.io/Space-Explorer/"
              className="project-links"
              target="_blank"
            >
              <div id="project-picture1"></div>
            </a>
            <div className="project-informations">
              <h3 className="project-title">Space Explorer</h3>
              <p className="project-details">
                Space Explorer is a 2D space shooter game made with javascript.{" "}
                The goal of this project was to work with{" "}
                <span>
                  object-oriented programming and basic javascript methods
                </span>
                .
                <br />
                <br />
                You are travelling in space when aliens find you and try to kill
                you. You have to destroy as much enemies as you can and get the
                best score.
              </p>
              <div className="links-section">
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
          <div className="project">
            <div id="project-picture2">
            </div>
            <div className="project-informations">
              <h3 className="project-title">Petsit</h3>
              <p className="project-details">
                Petsit is an application designed for mobile (iphone X viewport
                only at the moment). For this project, my colleague and me used
                <span>
                  {" "}
                  Node JS, MongoDB, HBS, html, CSS and Javascript
                </span>. <br />
                <br />
                This application gives the opportunity to pet owners to find
                people to take care of their animals for a short period of time.
                <br />
                <br />{" "}
                <span>
                  Disclaimer: Deployment isn't working at this time, I will redo this application with React soon!
                </span>
              </p>
              <div className="links-section">
                <a
                  href="https://github.com/Falconairio/Petsit"
                  className="project-links"
                  target="_blank"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <a
              href="https://topit.herokuapp.com/login"
              className="project-links"
              target="_blank"
            >
              <div id="project-picture3"></div>
            </a>
            <div className="project-informations">
              <h3 className="project-title">Top·it</h3>
              <p className="project-details">
                Top·it was made to practice basic CRUD (Create, Read, Update,
                Delete) I managed to create the front-end and the back-end by
                myself using{" "}
                <span>
                  MongoDB, Express, React, Node JS, HTML, CSS and Javascript
                </span>
                . <br />
                <br />
                Top·it is a social network-like where the user can create an
                account and start posting topics or you can vote, favorite and
                comment an existing one.
              </p>
              <div className="links-section">
                <a
                  href="https://github.com/Fred011/Forum-BE"
                  className="project-links"
                  target="_blank"
                >
                  BACK-END
                </a>
                <a
                  href="https://github.com/Fred011/Forum-FE"
                  className="project-links"
                  target="_blank"
                >
                  FRONT-END
                </a>
              </div>
            </div>
          </div>
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
