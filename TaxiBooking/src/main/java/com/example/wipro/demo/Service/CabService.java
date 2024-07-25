package com.example.wipro.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wipro.demo.Repository.CabRepository;
import com.example.wipro.demo.entity.Cab;
@Service
public class CabService {
	@Autowired
	private CabRepository cr;
	
	public Cab create(Cab cab) {
		return cr.save(cab);
	}
	public List<Cab> read() {
		return cr.findAll();
	}
	public Cab read(Long id) {
		Optional<Cab> temp = cr.findById(id);
		Cab cab=null;
		if(temp.isPresent())
		{
			cab=temp.get();
		}
		return cab;
	}
	public Cab update(Cab cab) {
		Cab c = read(cab.getId());
		if(c!=null)
		{
			c=cab;
			cr.save(c);
		}
		return c;
	}
	public Cab delete(Long id) {
		Cab cab=read(id);
		if(cab!=null)
		{
			cr.delete(cab);		
		}
		return cab;
	}
	
	public List<String> getAllCabs()
	{
		return cr.getAllCabs();
	}
}
