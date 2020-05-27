/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="graviky-block">
          <h4>GRAVIKY LABS</h4>
          <p>
            We help business around the globe become carbon negative and push
            frontiers in sustainablity.
          </p>
          <p id="copyright">© 2020 Graviky Labs</p>
        </div>
        <div className="footer-links-block">
          <a href="#" className="footer-link">
            PRODUCTS
          </a>
          <a href="#" className="footer-link">
            PARTNERSHIP
          </a>
          <a href="#" className="footer-link">
            COMMUNITY
          </a>
          <a href="#" className="footer-link">
            CONTACT
          </a>
        </div>
        <div className="footer-social-block">
          <h4>FOLLOW US</h4>
          <div className="footer-icon-block">
            <a>
              <i className="fa fa-facebook"></i>
            </a>
            <a>
              <i className="fa fa-twitter"></i>
            </a>
            <a>
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="contacts-block">
          <h4>CONTACT US</h4>
          <p>The Castle Unit 345 2500 Castle Manhattan, New York City</p>
          <p>T: +216 (0)40 3629 4753</p>
          <p>E: hello@themenectar.com</p>
        </div>
      </div>
    );
  }
}
