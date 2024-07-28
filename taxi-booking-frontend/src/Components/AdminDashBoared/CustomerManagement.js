import React, { useState } from 'react';
import './customerMgmt.css';

function CustomerManagement() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [cabs, setCabs] = useState([
    { cabNumber: '1', cabType: 'Sedan', perKmRate: 10, cabName: 'Cab A' },
    { cabNumber: '2', cabType: 'SUV', perKmRate: 15, cabName: 'Cab B' },
    { cabNumber: '3', cabType: 'Hatchback', perKmRate: 8, cabName: 'Cab C' },
  ]);

  const [bookings, setBookings] = useState([]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const bookCab = (cab) => {
    setBookings([...bookings, cab]);
    alert(`Cab ${cab.cabName} booked successfully!`);
  };

  const cancelBooking = (index) => {
    setBookings(bookings.filter((_, i) => i !== index));
    alert('Booking cancelled successfully!');
  };

  return (
    <div className="management">
      <h2>Customer Management</h2>

      <section>
        <h3>Update Profile</h3>
        <form onSubmit={updateProfile}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                required
              />
            </label>
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </section>

      <section>
        <h3>Available Cabs</h3>
        <table>
          <thead>
            <tr>
              <th>Cab ID</th>
              <th>Cab Type</th>
              <th>Per Km Rate</th>
              <th>Cab Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cabs.map((cab, index) => (
              <tr key={index}>
                <td>{cab.cabNumber}</td>
                <td>{cab.cabType}</td>
                <td>{cab.perKmRate}</td>
                <td>{cab.cabName}</td>
                <td>
                  <button onClick={() => bookCab(cab)}>Book</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Your Bookings</h3>
        <table>
          <thead>
            <tr>
              <th>Cab ID</th>
              <th>Cab Type</th>
              <th>Per Km Rate</th>
              <th>Cab Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.cabNumber}</td>
                <td>{booking.cabType}</td>
                <td>{booking.perKmRate}</td>
                <td>{booking.cabName}</td>
                <td>
                  <button onClick={() => cancelBooking(index)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default CustomerManagement;
