import React, { Component } from 'react'
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import PartnersHero from './PartnersHero/PartnersHero';
import Partnersection1 from './Partnersection1/Partnersection1';
import Partnersection2 from './Partnersection2/Partnersection2';
import Partnersection3 from './Partnersection3/Partnersection3';
import Partnersection5 from './Partnersection5/Partnersection5';
import Section9 from '../Home/Section9/Section9';
import Psection9 from '../Product/Psection9/Psection9';
import {connect} from 'react-redux';
import {getNav} from '../../action/actions';

class Partners extends Component {
    componentDidMount = () => {
        window.scrollTo(-10,0);
        this.props.getNav("PARTNERSHIP")
      }

    render() {
        return (
            <div>
                <Header/>
                <PartnersHero/>
                <Partnersection1/>
                <Partnersection2/>
                <Partnersection3/>
                <Psection9/>
                <Partnersection5/>
                <Section9/>
                <Footer/>
            </div>
        )
    }
}

export default connect (null, {getNav})(Partners)