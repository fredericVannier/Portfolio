import React, { Component } from "react";

export class contact extends Component {
  render() {
    return (
      <div className="contact-main-container">
        <div className="contact-text">
          <p>
            I have always been interested by design, the digital market and the
            tech industry, but I am open to many other fields. I keep my skills
            up to date and try to{" "}
            <span> create attractive and creative projects</span> as much as I
            can.
            <br />
            <br /> If you have a project in mind and would like to share it with
            me, feel free to contact me. I would be pleased{" "}
            <span>to collaborate with awesome people</span>.{" "}
          </p>
        </div>

        <div className="contact-icons">
          <div className="icon-section">
            <a
              href="https://github.com/Fred011"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="one-link">
                <div className="link-elements">
                  <img
                    src="./github.svg"
                    className="logo-platforms"
                    alt="github-logo"
                  />
                  <h3>Github</h3>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/frederic-vannier/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="one-link">
                <div className="link-elements">
                  <img
                    src="./linkedin.svg"
                    className="logo-platforms"
                    alt="github-logo"
                  />
                  <h3>Linkedin</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
