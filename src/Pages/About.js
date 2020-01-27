import React, { Component } from "react";

import { Link } from "react-scroll";

export class About extends Component {
  render() {
    return (
      <div className="about-main-container">
        <div className="about-container">
          <div className="main-section">
            <div className="profile-section">
              <div className="profile-picture"></div>
              <div className="profile-information">
                <div className="pre-section">
                  <h4>Frederic Vannier | 27 | Barcelona</h4>
                  <img src="./map-pin.svg" alt="location pin" />
                </div>
                <p id="description">
                  Web developper with a background in graphic design, I've
                  always been passionated by learning and creating. Programming
                  came to me as the logical next step in my career path.
                </p>
              </div>
            </div>
            <div className="education-section">
              <div className="formations">
                <h2 className="title-section">Education</h2>

                <div className="education-details">
                  <div className="details-section">
                    <h3>Ironhack Web development Bootcamp | Q4 2019</h3>
                    <p className="degree-description">
                      Intensive courses to learn Front-end design, Back-end
                      architecture fundamentals using top-notch technologies and
                      become full-stack developer.
                    </p>
                  </div>
                  <div className="details-section">
                    <h3>
                      Two years degree in Communication and Marketing | 2014
                    </h3>
                    <p className="degree-description">
                      Intensive courses to learn Front-end design, Back-end
                      architecture fundamentals using top-notch technologies and
                      become a full-stack developer.
                    </p>
                  </div>
                </div>

                <h2 className="title-section">Skills</h2>

                <div className="tech-stack">
                  <div className="tech-section">
                    <div className="one-tech">
                      <img src="./html5.svg" className="logo-tech" alt="logo" />
                      <p className="tech-name">HTML5</p>
                    </div>
                    <div className="one-tech">
                      <img src="./css3.svg" className="logo-tech" alt="logo" />
                      <p className="tech-name">CSS3</p>
                    </div>
                    <div className="one-tech">
                      <img
                        src="./javascript.svg"
                        className="logo-tech"
                        alt="logo"
                      />
                      <p className="tech-name">Javascript</p>
                    </div>
                    <div className="one-tech">
                      <img src="./sass.svg" className="logo-tech" alt="logo" />
                      <p className="tech-name">SASS</p>
                    </div>
                    <div className="one-tech">
                      <img
                        src="./mongodb.svg"
                        className="logo-tech"
                        alt="logo"
                      />
                      <p className="tech-name">MongoDB</p>
                    </div>
                    <div className="one-tech">
                      <img
                        src="./express.svg"
                        className="logo-tech-special"
                        alt="logo"
                      />
                      <p className="tech-name">Express</p>
                    </div>
                    <div className="one-tech">
                      <img src="./react.svg" className="logo-tech" alt="logo" />
                      <p className="tech-name">React</p>
                    </div>
                    <div className="one-tech">
                      <img
                        src="./nodejs.svg"
                        className="logo-tech"
                        alt="logo"
                      />
                      <p className="tech-name">Node JS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            activeClass="active"
            to="projects-section"
            spy={true}
            smooth={true}
            duration={600}
          >
            <div className="transition-container about-transition">
              <div className="transition-section">
                <p className="transition-text">Check my projects</p>
                <img src="./arrow-down.svg" className="slide-top" alt="arrow" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default About;
