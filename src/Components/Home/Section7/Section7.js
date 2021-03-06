/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import card from "../../../assets/card.png";
import play from "../../../assets/Play.png";
import "./Section7.css";

export default class Section7 extends Component {
  render() {
    return (
      <div className="section7-container">
        <div className="section7-left">
          <h1>With Doconomy & Mastercard</h1>
          <p>
            We partnered with Doconomy and Mastercard to create carbon negative
            credit cards in collaboration with UNFCCC.
          </p>
          <img className="card-img-mobile-version" src={card} alt="card" />
          <div className="section7-button-container">
            <a className="partner-button" href="/partners">
              Partner with us
            </a>
            <a className="watch-video-button" href="https://www.youtube.com/watch?v=Ug5k1j5CfM8" target= "_blank">
              <img src={play} alt="Play" />
              Watch Video
            </a>
          </div>
        </div>
        <img className="card-img" src={card} alt="card" />
      </div>
    );
  }
}
