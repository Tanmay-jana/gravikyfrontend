import React, { Component } from 'react'
import Header from '../Home/Header/Header';
import HeroSection from './HeroSection/HeroSection';
import Psection2 from './Psection2/Psection2';
import Psection3 from './Psection3/Psection3';
import Psection4 from './Psection4/Psection4';
import Psection5 from './Psection5/Psection5';
import Psection6 from './Psection6/Psection6';

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
               <Psection3/>
               <Psection4/>
               <Psection5/>
               <Psection6/>
            </div>
        )
    }
}
