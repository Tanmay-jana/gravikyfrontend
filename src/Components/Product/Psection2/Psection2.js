import React, { Component } from "react";
import "./Psection2.css";
import ScrollAnimation from "react-animate-on-scroll";
import arrow from '../../../assets/arrow.png';

export default class Psection2 extends Component {
  render() {
    return (
      <div className="p-section2-container">
        <h1>Why choose AIR-INK™ ?</h1>
        <p>
          Between 40 to 60 percent of industrial printing is black ink and made
          using petroleum dependent processes. AIR-INK™is made from upcycled
          carbon emission, which means it is black, carbon negative, and
          directly usable in existing production lines.
        </p>
        <span>Get the same outcome,<br/>but not the same footprint.</span>
        <ScrollAnimation animateIn = "fadeIn" className = "section-role-link">
            <a href = "#Flexographic">FLEXOGRAPHIC <img src = {arrow} alt = "arrow-button"/></a>
            <a href = "#SilkScreen">SILK SCREEN INK <img src = {arrow} alt = "arrow-button"/></a>
            <a href = "#WritingInstruments">WRITING INSTRUMENTS <img src = {arrow} alt = "arrow-button"/></a>
        </ScrollAnimation>
      </div>
    );
  }
}
