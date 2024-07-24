import React, { useEffect, useState } from 'react';
import { getBookings, createBooking, deleteBooking } from '../api';

const CustomerDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    getBookings()
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    deleteBooking(id)
      .then(() => {
        fetchBookings();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Customer Dashboard</h1>
      <button onClick={() => createBooking({/* booking data */})}>Book a Cab</button>
      <h2>Booking History</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.pickupLocation} to {booking.dropLocation}
            <button onClick={() => handleDelete(booking.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDashboard;
