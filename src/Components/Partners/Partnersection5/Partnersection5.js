import React, { Component } from "react";
import "./Partnersection5.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Partnersection5 extends Component {
  render() {
    return (
      <div className="partnersection5-container">
        <h1>Join us</h1>
        <ScrollAnimation className = "partners5-text" animateIn="fadeIn">
          We belive the power to shape consumer mindset lies with your business.
          Our carbon negative materials can set new industry standards.
        </ScrollAnimation>
      </div>
    );
  }
}
