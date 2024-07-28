import React from "react";
import "./toolbar.css";
import { Link } from "react-router-dom";

const ToolbarExamplesSimple = ({ openBasicModal }) => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">Taxi Booking</Link>
        </div>
        <div className="navbar__item">
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/map">Ride</Link>
        </div>
        <div className="navbar__item">
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/DriverSignIn">Drive</Link>
        </div>
        <div className="navbar__item">
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/adminDashboard/cabs">Admin</Link>
        </div>
        <div className="navbar__item__end">
          <div className="navbar__item" onClick={() => openBasicModal('signUp')}>
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/DriverSignIn">Sign Up </Link>
          </div>
          <div className="navbar__item" onClick={() => openBasicModal('login')}>
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/Login">Login </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ToolbarExamplesSimple;
