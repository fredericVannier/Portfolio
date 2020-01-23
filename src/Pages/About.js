import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="profile-section">
          <div className="profile-picture"></div>
          <div className="profil-information">
            <h4>Frederic Vannier | 27 | Barcelona</h4>
            <p id="description">
              Web developper with a background in graphic design, I've always
              been passionated by learning and creating. Programming came to me
              as the logical next step in my carrer path. Driven by a strong
              will to provide the best user experience with a neat design, I'm
              always seeking ways to make improvements.
            </p>
          </div>
        </div>
        <div className="education-section">
          <div className="formations">
            <h2>Education</h2>

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
                <h3>Two years degree in Communication and Marketing | 2014</h3>
                <p className="degree-description">
                  Intensive courses to learn Front-end design, Back-end
                  architecture fundamentals using top-notch technologies and
                  become a full-stack developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
