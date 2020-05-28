/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import card from "../../../assets/card.png";
import play from '../../../assets/Play.png';
import "./Section7.css";

export default class Section7 extends Component {
  render() {
    return (
      <div className="section7-container">
        <div className="section7-left">
          <h1>With Mastercard, UNFCCC</h1>
          <p>
            We partnered with Mastercard credit cards in Europe to create Carbon
            Negative printing, in collaboration with UNFCCC .
          </p>
          <img className = "card-img-mobile-version" src = {card} alt = "card"/>
          <div className = "section7-button-container">
              <a className = "partner-button" href = "#">Partner with us</a>
              <a className = "watch-video-button" href = "#"><img src = {play} alt = "Play"/>Watch Video</a>
          </div>
        </div>
        <img className = "card-img" src = {card} alt = "card"/>
      </div>
    );
  }
}
