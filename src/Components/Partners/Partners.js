import React, { Component } from 'react'
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import PartnersHero from './PartnersHero/PartnersHero';
import Partnersection1 from './Partnersection1/Partnersection1';
import Partnersection2 from './Partnersection2/Partnersection2';
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
                <Footer/>
            </div>
        )
    }
}

export default connect (null, {getNav})(Partners)