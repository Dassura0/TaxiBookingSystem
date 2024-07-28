import React, { Component } from "react";
import axios from "axios";
import './UserSignIn.css'; // Import your own CSS for styling
import SignInImage from './Images/download.jpg'; // Import your image

class Signup extends Component {
  state = {
    res: {},
    res_received: false,
    formData: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    errors: {}
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  validateFields = () => {
    const { formData } = this.state;
    const errors = {};
    if (!formData.firstname) errors.firstname = "Please input your First Name!";
    if (!formData.lastname) errors.lastname = "Please input your Last Name!";
    if (!formData.email) errors.email = "Please input your E-mail!";
    if (!formData.password) errors.password = "Please input your Password!";
    if (formData.password.length < 8) errors.password = "Minimum password length is 8 characters";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email)) errors.email = "The input is not valid E-mail!";
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateFields()) {
      const values = {
        ...this.state.formData,
        role: 'user'
      };
      console.log("Received values of form: ", values);
      axios
        .post("https://api.crossfire37.hasura-app.io/signup", {
          "user": {
            "provider": "username",
            "data": {
              "username": values.firstname,
              "password": values.password
            }
          },
          "role": values.role,
          "firstname": values.firstname,
          "lastname": values.lastname
        })
        .then(response => {
          console.log(response);
          localStorage.setItem('AuthToken', response.data.auth_token)
          this.setState({ res: response.data, res_received: true });
        })
        .catch(error => {
          alert("ERROR: User name already exists!");
          console.log(error);
        });
    }
  };

  render() {
    const { formData, errors } = this.state;

    return (
      <div className="signup-container">
        <div className="signup-header">
          <img src={SignInImage} alt="Sign In" className="signup-avatar" />
          <h2>Taxi Booking</h2>
        </div>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="form-item">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={this.handleChange}
              className={errors.firstname ? 'error' : ''}
              required
            />
            {errors.firstname && <div className="error-message">{errors.firstname}</div>}
          </div>
          <div className="form-item">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={this.handleChange}
              className={errors.lastname ? 'error' : ''}
              required
            />
            {errors.lastname && <div className="error-message">{errors.lastname}</div>}
          </div>
          <div className="form-item">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={this.handleChange}
              className={errors.email ? 'error' : ''}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-item">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={this.handleChange}
              className={errors.password ? 'error' : ''}
              required
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <button type="submit" className="signup-form-button">
            SIGN UP
          </button>
          <div className="signup-footer">
            Or <a href="/Login">Login</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
