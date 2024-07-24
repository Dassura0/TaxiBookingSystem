import React, { useEffect, useState } from 'react';
import { getBookings, updateBooking, deleteBooking } from '../api';

const AdminBookingManagement = () => {
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

  const handleSave = (id, booking) => {
    updateBooking(id, booking)
      .then(() => {
        fetchBookings();
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
      <h1>Admin Booking Management</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.pickupLocation} to {booking.dropLocation}
            <button onClick={() => handleSave(booking.id, { ...booking, status: 'completed' })}>Complete</button>
            <button onClick={() => handleDelete(booking.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBookingManagement;
