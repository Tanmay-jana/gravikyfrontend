import React, { Component } from "react";
import "./Section9.css";

export default class Section9 extends Component {
  render() {
    return (
      <div className="section9-container">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us to fuel new sustainable energy into your business
        </p>
        <form className = "message-send-form">
            <input className = "form-input" type="text" id="name" name="name" placeholder = "Your name"/>
            <input className = "form-input" type="email" id="email" name="email" placeholder = "Your email"/>
            <textarea className = "form-input" placeholder = "Your message" rows="6"/>
            <input className = "submit-button" type="submit" id="fname" name="fname" value = "Send My Message"/>
        </form>
      </div>
    );
  }
}
