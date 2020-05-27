/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Section2.css";

export default class Section2 extends Component {
    state = {
        scrolled: false
      };
    
      componentDidMount = () => {
        window.addEventListener("scroll", () => {
          const isTop = window.scrollY < 550;
          if (isTop !== true) {
            this.setState({ scrolled: true });
          } else {
            this.setState({ scrolled: false });
          }
        });
      };
    
      componentWillUnmount() {
        window.removeEventListener("scroll", () => {
          const isTop = window.scrollY < 550;
          if (isTop !== true) {
            this.setState({ scrolled: true });
          } else {
            this.setState({ scrolled: false });
          }
        });
      }
  render() {
    return (
      <div className="section2-container">
        <p className = {this.state.scrolled === false? "transparent light-text":"light-text"}>
          The WHO estimates that 4.2 million premature deaths are linked to air
          pollution, aside from the effects on climate and equity. So we found a
          way to turn effluents into resources.
        </p>
        <p className = {this.state.scrolled === false? "transparent medium-text":"medium-text"}>The more we make, the better our air.</p>
        <div className = "learn-more-button" animateIn='fadeIn'><a  href = "#">Learn more</a></div>
      </div>
    );
  }
}
