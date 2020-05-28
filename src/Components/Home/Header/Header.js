/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Header.css";
import times from '../../../assets/Times.png';

export default class Header extends Component {
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
      const isTop = window.scrollY < 100;
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
  render() {
    return (
      <div className={this.state.scrolled === false? "main-header-container": "main-header-container-1"}>
        <a href="/" className="logo-text">
          GRAVIKY LABS
        </a>
        <i onClick = {this.isNav} className={this.state.isNav === false ?"fa fa-bars nav-icon":"fa fa-close nav-icon"}></i>
        <div className={this.state.isNav === true ?"myLinks" : "invisible"}>
          <a onClick = {this.onClose} href="#">PRODUCTS</a>
          <a onClick = {this.onClose} href="#">PARTNERSHIP</a>
          <a onClick = {this.onClose} href="#">COMMUNITY</a>
          <a onClick = {this.onClose} href="#">CONTACT</a>
        </div>
        <div className="header-buttons-container">
          <a href = "#">PRODUCTS</a>
          <a href = "#">PARTNERSHIP</a>
          <a href = "#">COMMUNITY</a>
          <a href = "#">CONTACT</a>
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
