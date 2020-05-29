/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./HeroSection.css";
import bitmap1 from "../../../assets/Bitmap1.png";
import bitmap2 from "../../../assets/Bitmap2.png";
import airInk from "../../../assets/AlR-INK Flexographic.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-product-container">
        <img className="hero-air-ink-img" src={airInk} alt="air-ink-img" />
        <ScrollAnimation
          className="hero-product-right-subcontainer"
          animateIn="fadeIn"
        >
          <h1>AIR-INK.</h1>
          <p>
          The perfect substitute.
          </p>
          <div className = "img-sub-container">
            <img src = {bitmap1} alt = "bit1"/>
            <img src = {bitmap2} alt = "bit2"/>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
