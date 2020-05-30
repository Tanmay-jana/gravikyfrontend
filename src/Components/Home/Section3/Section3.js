import React, { Component } from 'react'
import VizSensor from 'react-visibility-sensor';

import './Section3.css'

export default class Section3 extends Component {
    state = {
        scrolled: true,
        imgViz: false,
        fortune: 0,
        produced:0,
        offset: 0
      };

      changeNumber = () => {
            var interval1 = setInterval(() => {
                if(this.state.fortune >= 3) {
                    clearInterval(interval1)
                }
                if(this.state.fortune < 3) {
                    this.setState({fortune: this.state.fortune + 1})
                }  
             },80)
    
             var interval2 = setInterval(() => {
                if(this.state.produced >= 20500) {
                    clearInterval(interval2)
                }
                if(this.state.produced < 20500) {
                    this.setState({produced: this.state.produced + 500})
                }
             },6)
    
             var interval3 = setInterval(() => {
                if(this.state.offset >= 700) {
                    clearInterval(interval3)
                }
                if(this.state.offset < 700) {
                    this.setState({offset: this.state.offset + 50})
                }
             },20)
      }

      reset = () => {
          this.setState({
            fortune: 0,
            produced:0,
            offset: 0
          })
      }
    
    render() {
        return (
            <VizSensor
            partialVisibility
            // offset={{top:10}}
        onChange={(isVisible) => {
          this.setState({imgViz: isVisible})
          if(isVisible === true) {
              this.changeNumber()
          }
        //   if(isVisible === false) {
        //       this.reset()
        //   }
        }}
            >
            <div className = "section3-container">
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>{this.state.fortune}</h4>
                    <p><span>Fortune 500</span><br/> Clients</p>
                </div>
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>{this.state.produced}</h4>
                    <p>Liters of <br/><span>AIR-INK</span> produced</p>
                </div>
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>{this.state.offset}</h4>
                    <p>Tonnes of <br/><span>Carbon offset</span></p>
                </div>
            </div>
            </VizSensor>
        )
    }
}
