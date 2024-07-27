// import React, { Component } from "react";
// import axios from "axios";
// import "antd/dist/antd.css";
// import "./Example.css";
// import Paper from 'material-ui/Paper';
// import Avatar from 'material-ui/Avatar';
// import Divider from 'material-ui/Divider';
// import SignInImage from './Images/download.jpg';
// import DriverImage from './Images/driver.jpg';
// import { Form, Input, Button, Select } from "antd";
// import { locales } from "moment";

// const { Option } = Select;
// const stylePaper = {
//   height: '550px',
//   width: '400px',
//   background: '#f8f8f9',
//   position: 'relative',
//   marginLeft:'350px',
//   marginTop: '0px'
// };

// const styleText = {
//     marginLeft: '100px',
//     marginTop: '-50px',
//     paddingTop: '15px',
//     fontSize: '1.71429rem',
//     fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
//     fontWeight: '400'
// };

// const styleDivider = {
//   marginTop: '30px',
//   backgroundColor: 'rgba(210, 210, 210, 0.6)'
// };

// const styleDiv2 = {
//   marginTop:'10px'
// };

// const FormItem = Form.Item;

// class Signup extends Component {
//   state = {
//     res: {},
//     res_received: false
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, fieldsValue) => {
//       if (!err) {
//         const values = {
//           ...fieldsValue,
//           role: 'driver'
//         };
//         //delete values[""];
//         console.log("Received values of form: ", values);
//         axios
//           .post("https://api.crossfire37.hasura-app.io/signup",
//           {
//             "user": {
//               "provider": "username",
//               "data": {
//                 "username": values.firstname,
//                 "password": values.password
//               }
//             },
//             "role": values.role,
//             "firstname": values.firstname,
//             "lastname": values.lastname,
//             "regno": values.vehicleregistrationnumber,
//             "type": values.vehicletype,
//             "capacity": values.vehiclecapacity,
//             "city": values.city
//           }
//           )
//           .then(response => {
//             console.log(response);
//             localStorage.setItem('AuthToken' ,response.data.auth_token)
//             this.setState({ res: response.data });
//             this.setState({ res_received: true });
//           })
//           .catch(error => {
//             alert("ERROR: User name already exists!")
//             console.log(error);
//           });
//       }
//     });
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     let result = null;
//     if (this.state.res_received) {
//       alert('Sign Up Succesful!');
//       console.log(this.state.res_recieved);
//     }

//     return (
//       <Paper style={stylePaper}>

//         <Form onSubmit={this.handleSubmit} className="signup-form">
//           {/* <div style={{marginTop: '20px', marginBottom: '20px'}}>
//             <Avatar src={SignInImage} size='80px' />
//             <div style={styleText}>
//               Taxi  Booking
//             </div>
//           </div> */}
//           {/* <Divider style={styleDivider} /> */}
//           <div style={{marginTop: '20px', marginBottom: '20px'}}>
//             {/* <Avatar src={DriverImage} size='80px'  />   */}
//             <div style={styleText}           >
//               Sign up
//             </div>
//           </div>
//           <FormItem>
//             {getFieldDecorator("userType", {
//               rules: [
//                 { required: true, message: "Please select atleast one option" },
//               ]
//             })(<Select
//               showSearch
//               placeholder="Search to Select"
//               optionFilterProp="children"
//               filterOption={(input, option) => {
//                 const childrenText = option && option.children ? option.children : '';
//                 return childrenText.toLowerCase().includes(input.toLowerCase());
//               }}
//               filterSort={(optionA, optionB) =>
//                 optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
//               }
//             >
//               <Option value="1">Sign up as a driver</Option>
//               <Option value="2">Sign up as a customer</Option>
//             </Select>)}
//           </FormItem>
//           <FormItem>
//             {getFieldDecorator("firstname", {
//               rules: [{ required: true, message: "Please input your First Name!" }]
//             })(<Input placeholder="First Name" />)}
//           </FormItem>
//           <FormItem>
//             {getFieldDecorator("lastname", {
//               rules: [{ required: true, message: "Please input your Last Name!" }]
//             })(<Input placeholder="Last Name" />)}
//           </FormItem>
//           <FormItem>
//             {getFieldDecorator("email", {
//               rules: [
//                 {
//                   type: "email",
//                   message: "The input is not valid E-mail!"
//                 },
//                 {
//                   required: true,
//                   message: "Please input your E-mail!"
//                 }
//               ]
//             })(<Input placeholder="Email" />)}
//           </FormItem>
//           {/* <FormItem>
//             {getFieldDecorator("vehicleregistrationnumber", {
//               rules: [{ required: true, message: "Please input your Vehicle Resgistration Number!" }]
//             })(<Input placeholder="Vehicle Registration Number" />)}
//           </FormItem> */}
//           {/* <FormItem>
//             {getFieldDecorator("vehicletype", {
//               rules: [{ required: true, message: "Please input your Vehicle Type!" }]
//             })(<Input placeholder="Vehicle Type" />)}
//           </FormItem> */}
//           {/* <FormItem>
//             {getFieldDecorator("vehiclecapacity", {
//               rules: [{ required: true, message: "Please input your Vehicle Capacity!" }]
//             })(<Input type="number" placeholder="Vehicle Capacity" />)}
//           </FormItem> */}
//           <FormItem>
//             {getFieldDecorator("password", {
//               rules: [
//                 { required: true, message: "Please input your Password!" },
//                 { min: 8, message: "Minimum password length is 8 characters" }
//               ]
//             })(<Input type="password" placeholder="Password" />)}
//           </FormItem>
//           <FormItem>
//             {getFieldDecorator("city", {
//               rules: [{ required: true, message: "Please input your City!" }]
//             })(<Input placeholder="City" />)}
//           </FormItem>
//           <FormItem>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="signup-form-button"
//             >
//               SIGN UP AS DRIVER
//             </Button>
//             Or <a href="/Login">Login</a>
//           </FormItem>
//           {result}
//         </Form>
//       </Paper>
//     );
//   }
// }

// const Sign_up = Form.create()(Signup);

// export default Sign_up;


import React, { Component } from "react";
import axios from "axios";
import "./signup.css";

class Signup extends Component {
  state = {
    res: {},
    res_received: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          role: 'driver'        
        };
        //delete values[""];
        console.log("Received values of form: ", values);
        axios
          .post("https://api.crossfire37.hasura-app.io/signup", 
          {
            "user": {
              "provider": "username",
              "data": {
                "username": values.firstname,
                "password": values.password
              }
            },
            "role": values.role,
            "firstname": values.firstname,
            "lastname": values.lastname,
            "regno": values.vehicleregistrationnumber,
            "type": values.vehicletype,
            "capacity": values.vehiclecapacity,
            "city": values.city
          }
          )
          .then(response => {
            console.log(response);
            localStorage.setItem('AuthToken' ,response.data.auth_token)
            this.setState({ res: response.data });
            this.setState({ res_received: true });
          })
          .catch(error => {
            alert("ERROR: User name already exists!")
            console.log(error);
          });
      }
    });
  };

  render() {
    let result = null;
    if (this.state.res_received) {
      alert('Sign Up Succesful!');
      console.log(this.state.res_recieved);
    }

    return (
      <form onSubmit={this.handleSubmit} className="signup-form">
        <div className="signup-form-header">
          <h2 style={{ marginBottom: '0px' }}>Sign up</h2>
        </div>
        <div className="signup-form-body">
          <div className="form-group">
            <input type="text" placeholder="First Name" name="firstname" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" name="lastname" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="City" name="city" />
          </div>
          <div className="form-group">
            <select name="userType">
              <option value="1">Sign up as a driver</option>
              <option value="2">Sign up as a customer</option>
            </select>
          </div>
          <button type="submit" className="signup-form-button">SIGN UP AS DRIVER</button>
        </div>
      </form>
    );
  }
}

export default Signup;
