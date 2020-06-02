import React, { Component } from "react";
import "./PartnersHero.css";
import background from "../../../assets/Black-video.mp4";
import background_1 from "../../../assets/Black-video.ogg";
import ScrollAnimation from "react-animate-on-scroll";

export default class PartnersHero extends Component {
  render() {
    return (
      <div className="partners-hero-container">
        <video playsInline id="background-video" loop autoPlay muted>
          <source src={background} type="video/mp4" />
          <source src={background_1} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <ScrollAnimation animateIn="fadeIn" className = "hero-section-text">
          <h1>Partner with us</h1>
          <p>Challenge conventional carbon based production</p>
        </ScrollAnimation>
      </div>
    );
  }
}
