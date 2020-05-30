import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import badge from "../../../assets/badge.png";
import analysis from "../../../assets/analysis.png";
import kaalink from "../../../assets/kaalink.png";
import people from "../../../assets/people.png";
import "./Psection8.css";

export default class Psection8 extends Component {
  render() {
    return (
      <div className="psection8-container">
        <h1>How is it made?</h1>
        <p>
          Our retrofit tool, KAALINK, captures carbon emissions at the source
          <br />
          and we cycle it back into the production chain - turning otherwise
          <br />
          harmful waste into a net positive resource.
        </p>
        <ScrollAnimation
          className="product-feature-section8"
          animateIn="fadeIn"
        >
          <div className="psection8-block">
            <img src={kaalink} alt="kaalink" />
            <h4>
              KAALINK
              <br />
              CAPTURE
            </h4>
            <p>
              Our customisable tool KAALINK captures particulate matter from
              diesel scrubbers, pyrolysis plants, boilers and other sources.
            </p>
          </div>
          <div className="psection8-block">
            <img src={analysis} alt="analysis" />
            <h4>
              ANALYSYS &<br />
              STRONG
            </h4>
            <p>
              Particulate matter is separated and pre-processed for treatment
            </p>
          </div>
          <div className="psection8-block">
            <img src={people} alt="people" />
            <h4>TREATMENT<br/><span>-</span></h4>
            <p>
              With our proprietary treatment method, effluents are converted
              into advanced materials
            </p>
          </div>
          <div className="psection8-block">
            <img src={badge} alt="badge" />
            <h4>
              MASTERBATCH
              <br />
              FORMULATION
            </h4>
            <p>
              Our industrial formulation partners help us produce composites,
              advanced inks, and coatings
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
