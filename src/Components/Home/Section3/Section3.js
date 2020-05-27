import React, { Component } from 'react'
import './Section3.css'

export default class Section3 extends Component {
    state = {
        scrolled: false
      };
    
      componentDidMount = () => {
        window.addEventListener("scroll", () => {
          const isTop = window.scrollY < 1000;
          if (isTop !== true) {
            this.setState({ scrolled: true });
          } else {
            this.setState({ scrolled: false });
          }
        });
      };
    
      componentWillUnmount() {
        window.removeEventListener("scroll", () => {
          const isTop = window.scrollY < 1000;
          if (isTop !== true) {
            this.setState({ scrolled: true });
          } else {
            this.setState({ scrolled: false });
          }
        });
      }
    render() {
        return (
            <div className = "section3-container">
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>3</h4>
                    <p><span>Fortune 500</span><br/> Clients</p>
                </div>
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>20,500</h4>
                    <p>Liters of <br/><span>AIR-INK</span> produced</p>
                </div>
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>700</h4>
                    <p>Tonnes of <br/><span>Carbon offset</span></p>
                </div>
            </div>
        )
    }
}
