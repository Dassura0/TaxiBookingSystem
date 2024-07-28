
import React, { Component } from "react";
import axios from "axios";
import "./login.css";

class signin extends Component {
  state = {
    res: {},
    res_received: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      firstname: this.refs.firstname.value,
      password: this.refs.password.value,
    };
    console.log("Received values of form: ", values);
    axios
      .post("https://api.crossfire37.hasura-app.io/login", {
        provider: "username",
        data: {
          username: values.firstname,
          password: values.password,
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("AuthToken", response.data.auth_token);
        this.setState({ res: response.data });
        this.setState({ res_received: true });
      })
      .catch((error) => {
        alert("ERROR: User name does not exists!");
        console.log(error);
      });
  };

  render() {
    let result = null;
    if (this.state.res_received) {
      alert('Login Succesful! Please go to "Ride" to book your ride.');
      console.log(this.state.res_recieved);
    }

    return (
      <div className="container">
        <div className="paper">
          <form onSubmit={this.handleSubmit} className="signin-form">
            <div className="text">Taxi Booking</div>
            <input
              type="text"
              ref="firstname"
              placeholder="First Name"
              className="input"
            />
            <input
              type="password"
              ref="password"
              placeholder="Password"
              className="input"
            />
            <button type="submit" className="button">
              LOGIN
            </button>
            Or <a href="/UserSignIn">Sign Up</a>
          </form>
        </div>
        <div className="background-image"></div>
      </div>
    );
  }
}

export default signin;