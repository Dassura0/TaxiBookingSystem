package com.example.wipro.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wipro.demo.Repository.AdminRepository;
import com.example.wipro.demo.entity.Admin;

@Service
public class AdminService {
	@Autowired
	private AdminRepository ar;
	
	public Admin create(Admin admin)
	{
		return ar.save(admin);
		
	}
	
	public List<Admin> read()
	{
		return ar.findAll();
		
	}
	
	public Admin read(Long id)
	{
		Optional<Admin>temp=ar.findById(id);
		Admin admin=null;
		if(temp.isPresent())
		{
			admin=temp.get();
		}
		
		return admin;
		
	}
	
	public Admin update(Admin admin)
	{
		Admin a=read(admin.getId());
		if(a!=null)
		{
			a=admin;
			ar.save(a);
		}
		return a;
	}
	
	public Admin delete(Long id)
	{
		Admin admin=read(id);
		if(admin!=null)
		{
			ar.delete(admin);
		}
		return admin;
	}
	

}
