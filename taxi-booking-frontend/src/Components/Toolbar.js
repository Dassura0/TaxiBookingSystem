// import React from 'react';
// import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
// import FlatButton from 'material-ui/FlatButton';
// import {Tabs, Tab} from 'material-ui/Tabs';

// const styleDiv = {
//   padding: '0px 127px',
// };

// const styleToolbar = {
//   background: 'white',
//   padding: '0px',
// };

// const styleTaxi = {
//   margin: '0px',
// };

// const styleTabs = {
//   marginLeft: '28px',
//   background: 'white',
// };

// const StyleTab = {
//   TabLeft : {
//   padding: '0px 20px',
//   borderTop: '4px',
//   background: 'white',
//   color: 'black',
//   textTransform: 'capitalize',
//   },
//   TabRight: {
//     padding: '0px',
//     margin: '0px',
//     borderTop: '4px',
//     background: 'white',
//     color: 'black',
//   },
// };

// const styleInkBar = {
//   background:'white',
// };

// export default class ToolbarExamplesSimple extends React.Component {

//   render() {
//     return (
//       <div style={styleDiv}>
//         <Toolbar style={styleToolbar}>
//           <ToolbarGroup>
//             <FlatButton
//               label='Taxi Booking'
//               hoverColor='white'
//               style= {styleTaxi}
//               href="/"
//             />
//             <Tabs style={styleTabs} inkBarStyle={styleInkBar}>
//               <Tab label="Ride" style={StyleTab.TabLeft} href="/bookACab">
//               </Tab>
//               <Tab label="Drive" style={StyleTab.TabLeft} href="/DriverSignIn">
//               </Tab>
//               <Tab label="Admin" style={StyleTab.TabLeft} href="/Admin/info">
//               </Tab>
//             </Tabs>
//           </ToolbarGroup>
//           <ToolbarGroup>
//             {/* <FlatButton label="Help" style={StyleTab.TabRight} href="/help" /> */}
//             <FlatButton label="Sign Up" style={StyleTab.TabRight} href="/DriverSignIn" />
//             <FlatButton label="Login" style={StyleTab.TabRight} href="/Login" />
//             {/* <FlatButton label="Log out" style={StyleTab.TabRight}  /> */}
//           </ToolbarGroup>
//         </Toolbar>
//       </div>
//     );
//   }
// }

import React from "react";
import "./toolbar.css";
import { Link } from "react-router-dom";

const ToolbarExamplesSimple = ({ openBasicModal }) => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <Link style={{ color: '#fff' }} to="/">Taxi Booking</Link>
        </div>
        <div className="navbar__item">
          <Link style={{ color: '#fff' }} to="/bookACab">Ride</Link>
        </div>
        <div className="navbar__item">
          <Link style={{ color: '#fff' }} to="/DriverSignIn">Drive</Link>
        </div>
        <div className="navbar__item">
          <Link style={{ color: '#fff' }} to="/Admin/info">Admin</Link>
        </div>
        <div className="navbar__item__end">
          <div className="navbar__item" onClick={() => openBasicModal('signUp')}>
            <Link style={{ color: '#fff' }} to="/DriverSignIn">Sign Up </Link>
          </div>
          <div className="navbar__item" onClick={() => openBasicModal('login')}>
            <Link style={{ color: '#fff' }} to="/Login">Login </Link>
          </div>
        </div>
      </header>
    </div>

    // <div style={styleDiv}>
    //   <div style={styleToolbar}>
    //     <div>
    //       <button style={styleTaxi}></button>
    //       <div style={styleTabs}>
    //         <div style={styleInkBar}></div>
    //         <a href="/bookACab" style={StyleTab.TabLeft}>Ride</a>
    //         <a href="/DriverSignIn" style={StyleTab.TabLeft}>Drive</a>
    //         <a href="/Admin/info" style={StyleTab.TabLeft}>Admin</a>
    //       </div>
    //     </div>
    //     <div>
    //       <button style={StyleTab.TabRight}>Sign Up</button>
    //       <button style={StyleTab.TabRight}>Login</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ToolbarExamplesSimple;
