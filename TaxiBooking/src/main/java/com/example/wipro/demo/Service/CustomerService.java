package com.example.wipro.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wipro.demo.Repository.CustomerRepository;
import com.example.wipro.demo.entity.Customer;
@Service
public class CustomerService {
	@Autowired
	private CustomerRepository cr;
	
	public Customer dreate(Customer customer) {
		return cr.save(customer);
	}
	public List<Customer> read() {
		return cr.findAll();
	}
	public Customer read(Long id) {
		Optional<Customer> temp = cr.findById(id);
		Customer customer=null;
		if(temp.isPresent())
		{
			customer=temp.get();
		}
		return customer;
	}
	public Customer update(Customer customer) {
		Customer c = read(customer.getId());
		if(c!=null)
		{
			c=customer;
			cr.save(c);
		}
		return c;
	}
	public Customer delete(Long id) {
		Customer customer=read(id);
		if(customer!=null)
		{
			cr.delete(customer);		
		}
		return customer;
	}
	
	public List<String> getAllCustomers()
	{
		return cr.getAllCustomers();
	}
}
