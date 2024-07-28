import React, { Component } from "react";
import axios from "axios";
import "./signup.css";

class Signup extends Component {
  state = {
    res: {},
    res_received: false,
    errors: {},
  };

  validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First Name is required";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    const fieldsValue = {
      firstname: formElements.firstname.value,
      lastname: formElements.lastname.value,
      email: formElements.email.value,
      password: formElements.password.value,
      city: formElements.city.value,
    };

    const errors = this.validate(fieldsValue);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const values = {
      ...fieldsValue,
      role: "driver",
    };

    console.log("Received values of form: ", values);
    axios
      .post("https://api.crossfire37.hasura-app.io/signup", {
        user: {
          provider: "username",
          data: {
            username: values.firstname,
            password: values.password,
          },
        },
        role: values.role,
        firstname: values.firstname,
        lastname: values.lastname,
        regno: values.vehicleregistrationnumber,
        type: values.vehicletype,
        capacity: values.vehiclecapacity,
        city: values.city,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("AuthToken", response.data.auth_token);
        this.setState({ res: response.data, res_received: true });
      })
      .catch((error) => {
        alert("ERROR: User name already exists!");
        console.log(error);
      });
  };

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="signup-form">
        <div className="signup-form-header">
          <h2 style={{ marginBottom: "0px" }}>Sign up</h2>
        </div>
        <div className="signup-form-body">
          <div className="form-group">
            <input type="text" placeholder="First Name" name="firstname" />
            {errors.firstname && (
              <span className="error">{errors.firstname}</span>
            )}
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" name="lastname" />
            {errors.lastname && (
              <span className="error">{errors.lastname}</span>
            )}
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="form-group">
            <input type="text" placeholder="City" name="city" />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <div className="form-group">
            <select name="userType">
              <option value="1">Sign up as a driver</option>
              <option value="2">Sign up as a customer</option>
            </select>
          </div>
          <button type="submit" className="signup-form-button">
            SIGN UP AS DRIVER
          </button>
        </div>
      </form>
    );
  }
}

export default Signup;
