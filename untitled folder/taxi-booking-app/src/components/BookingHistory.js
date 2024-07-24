import React, { useEffect, useState } from 'react';
import { getBookings } from '../api';

const BookingHistory = () => {
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

  return (
    <div>
      <h1>Booking History</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.pickupLocation} to {booking.dropLocation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
