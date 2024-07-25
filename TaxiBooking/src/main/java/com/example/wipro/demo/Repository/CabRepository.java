package com.example.wipro.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.wipro.demo.entity.Cab;

public interface CabRepository extends JpaRepository<Cab, Long> {
	@Query("select distinct c.cabs from Cab c")
	List<String> getAllCabs();
}
