import React, { Component } from "react";
import "./Partnersection5.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Partnersection5 extends Component {
  render() {
    return (
      <div className="partnersection5-container">
        <h1>Join us</h1>
        <ScrollAnimation className="partners5-text" animateIn="fadeIn">
          The power to shape consumer mindset lies with your business. Help us
          create new industry standards for sustainable materials.
        </ScrollAnimation>
      </div>
    );
  }
}
