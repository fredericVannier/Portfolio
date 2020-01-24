import React, { Component } from "react";

export class contact extends Component {
  render() {
    return (
      <div className="contact-main-container">
        <div className="contact-text">
          <p>
            I have always been interested by design, the digital market and the
            tech industry, but I am open to many other fields. I keep my skills
            up to date and try to create attractive and creative projects. As
            much as I can If you have a project in mind and would like to share
            it with me, feel free to contact me. I would be pleased to
            collaborate with awesome people.{" "}
          </p>
        </div>

        <div className="contact-icons">
          <div className="icon-section">
            <a href="https://github.com/Fred011" target="_blank">
              <div className="one-link">
                <div className="link-elements">
                  <img src="./github.svg" alt="github-logo" />
                  <h3>Github</h3>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/frederic-vannier/" target="_blank">
            <div className="one-link">
              <div className="link-elements">
                <img src="./linkedin.svg" alt="github-logo" />
                <h3>Linkedin</h3>
              </div>
            </div>
            </a>
            <div className="one-link">
              <div className="link-elements">
                <img src="./gmail.svg" alt="github-logo" />
                <h3>Gmail</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
