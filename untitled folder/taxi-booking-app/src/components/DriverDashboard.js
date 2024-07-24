import React, { useEffect, useState } from 'react';
import { getBookings, updateBooking } from '../api';

const DriverDashboard = () => {
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

  const handleUpdate = (id, status) => {
    updateBooking(id, { status })
      .then(() => {
        fetchBookings();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Driver Dashboard</h1>
      <h2>Current Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.pickupLocation} to {booking.dropLocation}
            <button onClick={() => handleUpdate(booking.id, 'completed')}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverDashboard;
