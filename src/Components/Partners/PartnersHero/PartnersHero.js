import React, { Component } from "react";
import "./PartnersHero.css";
import background from "../../../assets/Black-video.mp4";
import background_1 from "../../../assets/Black-video.ogg";

export default class PartnersHero extends Component {
  componentDidMount = () => {
    window.scrollTo(0,0);
    console.log(window.scrollY)
  }
  render() {
    return (
      <div className="partners-hero-container">
        <video id="background-video" loop autoPlay>
          <source src={background} type="video/mp4" />
          <source src={background_1} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className = "hero-section-text">
          <h1>Partner with us</h1>
          <p>Challenge conventional carbon based production</p>
        </div>
      </div>
    );
  }
}
