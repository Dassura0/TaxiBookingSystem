import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/cabs">Manage Cabs</Link></li>
        <li><Link to="/admin/drivers">Manage Drivers</Link></li>
        <li><Link to="/admin/customers">Manage Customers</Link></li>
        <li><Link to="/admin/bookings">Manage Bookings</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
