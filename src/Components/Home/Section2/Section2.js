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
        <ScrollAnimation animateIn = "fadeIn">
        <p className = {this.state.scrolled === false? "transparent light-text":"light-text"}>
          The WHO estimates that 4.2 million premature deaths are linked to air
          pollution, aside from the effects on climate and equity. So we found a
          way to turn effluents into resources.
        </p>
        <p className = {this.state.scrolled === false? "transparent medium-text":"medium-text"}>The more we make, the better our air.</p>
        </ScrollAnimation>
        <div className = "learn-more-button"><a  href = "#">Learn more</a></div>
      </div>
    );
  }
}
