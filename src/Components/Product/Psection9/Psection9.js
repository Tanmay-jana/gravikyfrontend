/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import circle from "../../../assets/circle.png";
import "./Psection9.css";

export default class Psection9 extends Component {
  render() {
    return (
      <div className="psection9-container">
        <img src={circle} alt="circle" />
        <ScrollAnimation className="psection9-right-section" animateIn="fadeIn">
          <h1>Not just ink.</h1>
          <p>We can help decarbonise your supply chain.</p>
          <img src={circle} alt="circle" />
          <h4>
            Our R&D team is working with some of the biggest players to create
            construction material, rubber, thermoplastic polyurethanes, and more
            using upcycled carbon emissions. Reach out to us to develop new
            materials and decarbonise your supply chain.
          </h4>
          <a className="rnd-button" href="#contact-form">
            Contact R&D
          </a>
        </ScrollAnimation>
      </div>
    );
  }
}
