/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Header.css";
import times from '../../../assets/Times.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getNav} from '../../../action/actions';

class Header extends Component {
  state = {
    scrolled: false,
    isNav: false
  };

  isNav = () => {
    this.setState({isNav: !this.state.isNav})
  }

  onClose = () => {
    this.setState({isNav: false})
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 90;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  linkClicked = (value) => {
    this.props.getNav(value)
  }
  
  render() {
    return (
      <div className={this.state.scrolled === false? "main-header-container": "main-header-container-1"}>
        <a onClick = {() => this.linkClicked("HOME")} href="/" className="logo-text">
          GRAVIKY LABS
        </a>
        <i onClick = {this.isNav} className={this.state.isNav === false ?"fa fa-bars nav-icon":"fa fa-close nav-icon"}></i>
        <div className={this.state.isNav === true ?"myLinks" : "invisible"}>
          <a onClick = {this.onClose} href="/product">PRODUCTS</a>
          <a onClick = {this.onClose} href="#">PARTNERSHIP</a>
          <a onClick = {this.onClose} href="#">COMMUNITY</a>
          <a onClick = {this.onClose} href="#">CONTACT</a>
        </div>
        <div className="header-buttons-container">
          <Link className = {this.props.navid !== "PRODUCTS"? "link-style":"link-style link-active"} onClick = {() => this.linkClicked('PRODUCTS')} to = "/product">PRODUCTS</Link>
          <Link className = {this.props.navid !== "PARTNERSHIP"? "link-style":"link-style link-active"} onClick = {() => this.linkClicked('PARTNERSHIP')} to = "/">PARTNERSHIP</Link>
          <Link className = {this.props.navid !== "COMMUNITY"? "link-style":"link-style link-active"} onClick = {() => this.linkClicked('COMMUNITY')} to = "/">COMMUNITY</Link>
          <Link className = {this.props.navid !== "CONTACT"? "link-style":"link-style link-active"} onClick = {() => this.linkClicked('CONTACT')} to = "/">CONTACT</Link>
          <div className="social-logo-container">
            <i
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="fa fa-facebook"
            ></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
          <img className = {this.state.scrolled === false?"times-img": "time-img-small"} src = {times} alt = "times" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navid: state.navid
  };
};

export default connect(mapStateToProps, {getNav})(Header)