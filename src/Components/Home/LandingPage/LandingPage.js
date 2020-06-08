/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <h1>Decarbonize your production</h1>
        <p>
          We upcycle air pollution into sustainable inks, paints, coatings,
          plastics and construction materials
        </p>
        <div className="landing-button-container">
          <a className="blue-button" href="/partners">
            Partner with us
          </a>
          <a className="white-button" href="/product">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}
