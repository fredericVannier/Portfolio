import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="main container">
        <div className="home-container">
          <div className="img-background">
            <img src="./WEBDEV.svg" alt="background-image" />
          </div>
          <div className="greet-title">
            <p className="home-title">
              Hi<span>,</span> I'm Frederic<span>.</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
