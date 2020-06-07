/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import airInk from "../../../assets/AlR-INK Flexographic.png";
import "./Section4.css";

export default class Section4 extends Component {
  render() {
    return (
      <div className="section4-container">
        <img className="air-ink-img" src={airInk} alt="air-ink-img" />
        <ScrollAnimation
          className="section4-right-subcontainer"
          animateIn="fadeIn"
        >
          <h1>
            AIR-INK<sup>®</sup>
          </h1>
          <h3>The perfect substitute.</h3>
          <p>
            Replace the inks on your products with{" "}
            <span>
              AIR-INK<sup>®</sup>,
            </span>{" "}
            which is made from captured carbon emissions. It is carbon negative,
            safe, more versatile, and fits right into your production line.
          </p>
          <a className="see-product-button" href="#">
            See products
          </a>
        </ScrollAnimation>
      </div>
    );
  }
}
