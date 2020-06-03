/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import shirtImage from "../../../assets/shirt.png";
import { Slide } from "react-slideshow-image";
import "./Partnersection2.css";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  // pauseOnHover: true,
  arrows: true,
//   scale: 0.4,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//   }
};

export default class Partnersection2 extends Component {
  render() {
    return (
      <div className="partnersection2-container">
        <Slide {...fadeProperties}>
          <div className="partnersection2-subcontainer">
            <div>
              <h1>
                Use <br/>AIR–INK<sup className = "register">®</sup><br/> <span className = "blue">for commercial packaging</span>
              </h1>
              <a href = "#">Contact sales</a>
            </div>
            <img src={shirtImage} alt="shirt" />
          </div>
          <div className="partnersection2-subcontainer">
          <div>
              <h1>
                Use <br/>AIR–INK<sup className = "register">®</sup><br/> <span className = "blue">to make prints on apparel</span>
              </h1>
              <a href = "#">Contact sales</a>
            </div>
            <img src={shirtImage} alt="shirt" />
          </div>
          <div className="partnersection2-subcontainer">
          <div>
              <h1>
                Use <br/>AIR–INK<sup className = "register">®</sup><br/> <span className = "blue">in pens</span>
              </h1>
              <a href = "#">Contact sales</a>
            </div>
            <img src={shirtImage} alt="shirt" />
          </div>
        </Slide>
      </div>
    );
  }
}
