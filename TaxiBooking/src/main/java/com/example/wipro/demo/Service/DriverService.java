package com.example.wipro.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wipro.demo.Repository.DriverRepository;
import com.example.wipro.demo.entity.Driver;
@Service
public class DriverService {
	@Autowired
	private DriverRepository dr;
	
	public Driver dreate(Driver driver) {
		return dr.save(driver);
	}
	public List<Driver> read() {
		return dr.findAll();
	}
	public Driver read(Long id) {
		Optional<Driver> temp = dr.findById(id);
		Driver driver=null;
		if(temp.isPresent())
		{
			driver=temp.get();
		}
		return driver;
	}
	public Driver update(Driver driver) {
		Driver c = read(driver.getId());
		if(c!=null)
		{
			c=driver;
			dr.save(c);
		}
		return c;
	}
	public Driver delete(Long id) {
		Driver driver=read(id);
		if(driver!=null)
		{
			dr.delete(driver);		
		}
		return driver;
	}
	
	public List<String> getAllDrivers()
	{
		return dr.getAllDrivers();
	}
}
