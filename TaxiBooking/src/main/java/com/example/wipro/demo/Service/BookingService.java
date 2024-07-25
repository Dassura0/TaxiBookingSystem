package com.example.wipro.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wipro.demo.Repository.BookingRepository;
import com.example.wipro.demo.entity.Booking;

@Service
public class BookingService {
	@Autowired
	private BookingRepository br;
	
	public Booking create(Booking booking) {
		return br.save(booking);
	}
	
	public List<Booking> read(){
		return br.findAll();
	}
	
	public Booking read(Long id)
	{
		Optional<Booking> temp = br.findById(id);
		Booking booking=null;
		if(temp.isPresent())
		{
			booking=temp.get();
		}
		return booking;
	}
	
	public Booking update(Booking booking)
	{
		Booking b=read(booking.getId());
		if(b!=null)
		{
			b=booking;
			br.save(b);
		}
		return b;
	}
	
	public Booking delete(Long id) {
		Booking booking=read(id);
		if(booking!=null)
		{
			br.delete(booking);
		}
		return booking;
	}
	
	public List<String> getAllBookings(){
		return br.getAllBookings();
	}
	
	
}
