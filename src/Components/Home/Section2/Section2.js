/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Section2.css";

export default class Section2 extends Component {
  state = {
    scrolled: true
  };

  render() {
    return (
      <div className="section2-container">
        <ScrollAnimation animateIn="fadeIn">
          <p
            className={
              this.state.scrolled === false
                ? "transparent light-text"
                : "light-text"
            }
          >
            Black, the most commonly used industrial color, is produced with a
            large carbon footprint that contributes to the 4.2 million premature
            deaths linked to air pollution worldwide. So we found a way to turn
            carbon emissions industrial materials.
          </p>
          <p
            className={
              this.state.scrolled === false
                ? "transparent medium-text"
                : "medium-text"
            }
          >
            The more we make, the better our air.
          </p>
        </ScrollAnimation>
        <div className="learn-more-button">
          <a href="/product">Learn more</a>
        </div>
      </div>
    );
  }
}
