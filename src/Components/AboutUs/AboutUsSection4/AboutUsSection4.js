import React, { Component } from 'react'
import './AboutUsSection4.css'
import Oval from '../../../assets/image1.png';
import OvalCopy from '../../../assets/image2.png';
import OvalCopy2 from '../../../assets/image3.png';
import OvalCopy3 from '../../../assets/image4.png';
import OvalCopy4 from '../../../assets/image5.png';
import OvalCopy5 from '../../../assets/image6.png';
import OvalCopy6 from '../../../assets/image7.png';

import ScrollAnimation from "react-animate-on-scroll";

export default class AboutUsSection4 extends Component {
    render() {
        return (
            <div className = "aboutus-section4-container">
                <h1>The Team</h1>
                <ScrollAnimation animateIn="fadeIn" className = "aboutus-section4-team-block">
                    <div className = "team-block-section">
                        <img src = {Oval} alt = "oval"/>
                        <p>RND LEAD, BUSINESS</p>
                        <h4>Anirudh Sharma</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy} alt = "OvalCopy"/>
                        <p>OPERATION AND FINANCE</p>
                        <h4>Nikhil Kaushik</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy2} alt = "OvalCopy2"/>
                        <p>PROCESS/ CARBON CHEM</p>
                        <h4>Dr. Barkakaty</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy3} alt = "OvalCopy3"/>
                        <p>CARBON CHEM</p>
                        <h4>Alisha Patha</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy4} alt = "OvalCopy4"/>
                        <p>ADVISOR</p>
                        <h4>Prof. Pattie Maes</h4>
                        <p>Director, Fluid Interfaces, MIT</p>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy5} alt = "OvalCopy5"/>
                        <p>ADVISOR</p>
                        <h4>Christina Nunez</h4>
                        <p>Editorial Consultant</p>
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
