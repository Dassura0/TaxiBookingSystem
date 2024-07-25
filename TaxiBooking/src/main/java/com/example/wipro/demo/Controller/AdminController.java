package com.example.wipro.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.wipro.demo.Service.AdminService;
import com.example.wipro.demo.entity.Admin;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService as;
	
	@PostMapping
	public Admin addAdmin(@RequestBody Admin admin) {
		return as.create(admin);
	}
	@GetMapping
	public List<Admin> retrieveAllAdmins()
	{
			return as.read();
	}
	@GetMapping("/{id}")
	public Admin findAdminById(@PathVariable("id")Long id)
	{
		return as.read(id);
	}
	@PutMapping
	public Admin updateAdmin(@RequestBody Admin admin)
	{
		return as.update(admin);
	}
	@DeleteMapping("/{id}")
	public Admin deleteAdmin(@PathVariable("id") Long id)
	{
		return as.delete(id);
	}
	
	@GetMapping("/admins")
	public List<String>getAllAdmins()
	{
		return as.getAllAdmins();
	}
	
}
