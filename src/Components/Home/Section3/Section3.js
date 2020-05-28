import React, { Component } from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import './Section3.css'

export default class Section3 extends Component {
    state = {
        scrolled: true
      };
    
    render() {
        return (
            <div className = "section3-container">
                <ScrollAnimation animateIn="fadeIn" className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>3</h4>
                    <p><span>Fortune 500</span><br/> Clients</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>20,500</h4>
                    <p>Liters of <br/><span>AIR-INK</span> produced</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>700</h4>
                    <p>Tonnes of <br/><span>Carbon offset</span></p>
                </ScrollAnimation>
            </div>
        )
    }
}
