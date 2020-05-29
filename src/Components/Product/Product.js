import React, { Component } from 'react'
import Header from '../Home/Header/Header';
import HeroSection from './HeroSection/HeroSection';
import Psection2 from './Psection2/Psection2';

export default class Product extends Component {
    componentDidMount = () => {
        window.scrollTo(0,0);
      }
    render() {
        return (
            <div>
               <Header/>
               <HeroSection/>
               <Psection2/>
            </div>
        )
    }
}
