import React, { Component } from "react";
import axios from "axios";
import { withAlert } from "react-alert";
import "./Section9.css";
var Token = "keym176p36WU385vZ";

class Section9 extends Component {
  state = {
    isLoading: 0,
    name: "",
    email: "",
    message: ""
  };

  getName = e => {
    this.setState({ name: e.target.value });
  };

  getEmail = e => {
    this.setState({ email: e.target.value });
  };

  getMessage = e => {
    this.setState({ message: e.target.value });
  };

  sendMessage = (e, alert) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`
      }
    };
    const url = "https://api.airtable.com/v0/appXElmoIMUrIKvYd/Test";
    var data = {
      fields: {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      }
    };
    if (this.state.name !== "" && this.state.email !== "") {
      this.setState({ isLoading: 1 });
      axios
        .post(url, data, config)
        .then(res => {
          alert.show("Thanks, We will get back to you");
          this.setState({ isLoading: 0, name: "", email: "", message: "" });
        })
        .catch(error => alert.show("Somethin went wrong"));
    } else {
      alert.show("Name and Email should not be empty");
    }
  };
  render() {
    const alert = this.props.alert;
    return (
      <div className="section9-container">
        <div
          className={this.state.isLoading === 1 ? "loading-block" : "invisible"}
        ></div>
        <h1>Contact Us</h1>
        <p>Begin your carbon negative journey</p>
        <form
          onSubmit={e => this.sendMessage(e, alert)}
          className="message-send-form"
        >
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={this.state.name}
            onChange={this.getName}
          />
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            onChange={this.getEmail}
            value={this.state.email}
          />
          <textarea
            className="form-input"
            placeholder="Your message"
            rows="6"
            id="message"
            name="message"
            onChange={this.getMessage}
            value={this.state.message}
          />
          <input
            className="submit-button"
            type="submit"
            id="fname"
            name="fname"
            value="Send My Message"
          />
        </form>
      </div>
    );
  }
}

export default withAlert()(Section9);
