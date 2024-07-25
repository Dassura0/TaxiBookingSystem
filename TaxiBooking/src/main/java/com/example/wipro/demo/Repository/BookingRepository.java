package com.example.wipro.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.wipro.demo.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking,Long > {
	@Query("select distinct b.bookings from Bookings b")
	List<String> getAllBookings();

}
