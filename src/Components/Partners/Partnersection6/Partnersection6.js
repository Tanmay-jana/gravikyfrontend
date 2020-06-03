import React, { Component } from "react";
import "./Partnersection6.css";
import ReactPlayer from 'react-player'
var url = "https://www.youtube.com/watch?v=Ug5k1j5CfM8"

export default class Partnersection6 extends Component {
  render() {
    return (
      <div className="partnersection6-container">
        <h1>Featured case studies</h1>
        <div className="sacestudies-sub-container">
          <div className="partner-left-section">
            <h1>Mastercard & Doconomy</h1>
            <p>
              Tiger beer brought art made with AIR-INK to 12 different countries
            </p>
          </div>
          <div className = "video-section">
          <ReactPlayer url={url} controls width = '100%' height = '300px'/>
          </div>
        </div>
      </div>
    );
  }
}
