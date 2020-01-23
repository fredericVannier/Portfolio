import React, { Component } from "react";

export class SectionTransition extends Component {
  render() {
    return (
      <div className="transition-section">
        <p className="transition-text">Learn more about me</p>
        <img src="./arrow-down.svg" alt="arrow" />
      </div>
    );
  }
}

export default SectionTransition;
