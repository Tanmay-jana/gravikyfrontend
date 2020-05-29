import React, { Component } from 'react'
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import Psection2 from './Psection2/Psection2';
import Psection3 from './Psection3/Psection3';
import Psection4 from './Psection4/Psection4';
import Psection5 from './Psection5/Psection5';
import Psection6 from './Psection6/Psection6';
import Psection7 from './Psection7/Psection7';
import Psection8 from './Psection8/Psection8';
import Psection9 from './Psection9/Psection9';
import {connect} from 'react-redux';
import {getNav} from '../../action/actions';

class Product extends Component {
    componentWillMount = () => {
        this.props.getNav("PRODUCTS")
    }

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
               <Psection7/>
               <Psection8/>
               <Psection9/>
               <Footer/>
            </div>
        )
    }
}

export default connect (null, {getNav})(Product)