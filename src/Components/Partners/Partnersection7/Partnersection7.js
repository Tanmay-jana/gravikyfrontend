import React, { Component } from "react";
import "./Partnersection7.css";
import ReactPlayer from "react-player";

export default class Partnersection7 extends Component {
  render() {
    return (
      <div className="partnersection7-sontainer">
        <div className="sacestudies-sub-container">
          <div className="video-section">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=MqOplj2HSdE"
              controls
              width="100%"
              height="300px"
            />
          </div>
          <div className="partner-right-section">
            <h1>Heineken</h1>
            <p>
              How we helped make the world’s first credit card with a carbon
              limit
            </p>
          </div>
        </div>
      </div>
    );
  }
}
