import React, { Component } from 'react'
import './AboutUsSection4.css'
import Oval from '../../../assets/Oval.png';
import OvalCopy from '../../../assets/OvalCopy.png';
import OvalCopy2 from '../../../assets/OvalCopy2.png';
import OvalCopy3 from '../../../assets/OvalCopy3.png';
import OvalCopy4 from '../../../assets/OvalCopy4.png';
import OvalCopy5 from '../../../assets/OvalCopy5.png';
import OvalCopy6 from '../../../assets/OvalCopy6.png';

import ScrollAnimation from "react-animate-on-scroll";

export default class AboutUsSection4 extends Component {
    render() {
        return (
            <div className = "aboutus-section4-container">
                <h1>The Team</h1>
                <ScrollAnimation animateIn="fadeIn" className = "aboutus-section4-team-block">
                    <div className = "team-block-section">
                        <img src = {Oval} alt = "oval"/>
                        <p>CEO+PRODUCT</p>
                        <h4>Anirudh Sharma</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy} alt = "OvalCopy"/>
                        <p>MATERIAL SCIENCE & DEV.</p>
                        <h4>Dr. Terry Clayton</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy2} alt = "OvalCopy2"/>
                        <p>PROCESS/ CARBON CHEM</p>
                        <h4>Dr. Barkakaty</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy3} alt = "OvalCopy3"/>
                        <p>COO+LEGAL</p>
                        <h4>Nikhil Kaushik</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy4} alt = "OvalCopy4"/>
                        <p>ADVISOR</p>
                        <h4>Thomas Copeman</h4>
                        <p>Cofounder, Lululemon, CEO Naralogics</p>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy5} alt = "OvalCopy5"/>
                        <p>ADVISOR</p>
                        <h4>Prof. Pattie Maes</h4>
                        <p>Director, Fluid Interfaces, MIT</p>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy6} alt = "OvalCopy6"/>
                        <p>SPECIAL STAFF</p>
                        <h4>Kaali</h4>
                        <p>Spirit Animal</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}
