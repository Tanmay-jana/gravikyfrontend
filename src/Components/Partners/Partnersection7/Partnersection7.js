import React, { Component } from "react";
import "./Partnersection7.css";
import ReactPlayer from "react-player";
var url = "https://www.youtube.com/watch?v=cwy549sOYb8&feature=emb_logo"

export default class Partnersection7 extends Component {
  render() {
    return (
      <div className="partnersection7-sontainer">
        <div className="sacestudies-sub-container">
          <div className="video-section">
            <ReactPlayer
              url= {url}
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
