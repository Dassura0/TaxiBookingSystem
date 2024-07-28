import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CabManagement from './CabManagement';
import DriverManagement from './DriverManagement';
import BookingManagement from './BookingManagement';
import CustomerManagement from './CustomerManagement';
import './Admin.css';

export default function AdminRoutes() {
  return (
    <BrowserRouter>
      <div className="AdminApp">
        <div className="admin-header">
        <h1 className="left-header">Admin Dashboard</h1>
        <Navigation />
        </div>
        <hr></hr>
        <Switch>
          <Route path="/adminDashboard/cabs" component={CabManagement} />
          <Route path="/adminDashboard/drivers" component={DriverManagement} />
          <Route path="/adminDashboard/bookings" component={BookingManagement} />
          <Route path="/adminDashboard/customers" component={CustomerManagement} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/adminDashboard/cabs" style={{ textDecoration: 'none' }}>Cabs</Link></li>
        <li><Link to="/adminDashboard/drivers" style={{ textDecoration: 'none' }}>Drivers</Link></li>
        <li><Link to="/adminDashboard/bookings" style={{ textDecoration: 'none' }}>Bookings</Link></li>
        <li><Link to="/adminDashboard/customers" style={{ textDecoration: 'none' }}>Customers</Link></li>
      </ul>
    </nav>
  );
}
