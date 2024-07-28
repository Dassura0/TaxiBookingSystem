import React, { useState } from 'react';
import './Admin.css';


function BookingManagement() {
  const [bookings, setBookings] = useState([
    { id: 1, details: 'Booking 1' },
    { id: 2, details: 'Booking 2' },
  ]);

  const cancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="management">
      <h2>Booking Management</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.details} <button onClick={() => cancelBooking(booking.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingManagement;
