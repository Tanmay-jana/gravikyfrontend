/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <h1>Boost your sustainability without changing your process</h1>
        <p>
          We upcycle air pollution into sustainable plug-and-play industrial
          materials like inks and coatings
        </p>
        <div className = "landing-button-container">
            <a className = "blue-button" href = "#">Partner with us</a>
            <a className = "white-button" href = "#">Learn more</a>
        </div>
      </div>
    );
  }
}
