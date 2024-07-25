package com.example.wipro.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.wipro.demo.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	@Query("select distinct c.customer from Customer c")
	List<String> getAllCustomers();
}
