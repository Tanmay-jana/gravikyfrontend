import React, { Component } from 'react'
import Header from '../Home/Header/Header';
import AboutUsHero from './AboutUsHero/AboutUsHero';
import AboutUsSection1 from './AboutUsSection1/AboutUsSection1';
import AboutUsSection2 from './AboutUsSection2/AboutUsSection2';
import {connect} from 'react-redux';
import {getNav} from '../../action/actions';

class AboutUs extends Component {
    componentDidMount = () => {
        window.scrollTo(0,0);
        this.props.getNav('ABOUT US')
      }
      
    render() {
        return (
            <div>
                <Header/>
                <AboutUsHero/>
                <AboutUsSection1/>
                <AboutUsSection2/>
            </div>
        )
    }
}

export default connect(null,{getNav})(AboutUs)