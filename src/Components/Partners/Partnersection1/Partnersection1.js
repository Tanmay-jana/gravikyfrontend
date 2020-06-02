import React, { Component } from "react";
import "./Partnersection1.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Partnersection1 extends Component {
  render() {
    return (
      <div className="partnersection1-container">
        <ScrollAnimation animateIn = "fadeIn" className="partnersection1-top-container">
          <h1>Our Philosophy</h1>
          <p>
            Air pollution kills an estimated 4 million people worldwide and
            costs the global economy more than 5 trillion dollars per year. We
            work on technology that can make a real impact - that can stop
            carbon emissions from entering our air, our streams, and our lungs.{" "}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn = "fadeIn" className = "partnersection1-bottom-container">
            <div>
                <h3>AVOID</h3>
                <p>Avoid fossil fuels wherever possible</p>
            </div>
            <div>
                <h3>HARVEST</h3>
                <p>Harvest pollution, recycle carbon</p>
            </div>
            <div>
                <h3>REPLACE</h3>
                <p>Replace conventional production practices</p>
            </div>
        </ScrollAnimation>
      </div>
    );
  }
}
