import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import CustomerDashboard from './components/CustomerDashboard';
import AdminDashboard from './components/AdminDashboard';
import DriverDashboard from './components/DriverDashboard';
import CabList from './components/CabList';
import BookingHistory from './components/BookingHistory';
import Profile from './components/Profile';
import AdminCabManagement from './components/AdminCabManagement';
import AdminDriverManagement from './components/AdminDriverManagement';
import AdminCustomerManagement from './components/AdminCustomerManagement';
import AdminBookingManagement from './components/AdminBookingManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/cabs" element={<CabList />} />
          <Route path="/bookings" element={<BookingHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/cabs" element={<AdminCabManagement />} />
          <Route path="/admin/drivers" element={<AdminDriverManagement />} />
          <Route path="/admin/customers" element={<AdminCustomerManagement />} />
          <Route path="/admin/bookings" element={<AdminBookingManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
