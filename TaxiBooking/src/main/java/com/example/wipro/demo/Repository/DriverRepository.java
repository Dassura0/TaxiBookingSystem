package com.example.wipro.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.wipro.demo.entity.Driver;

public interface DriverRepository extends JpaRepository<Driver,Long> {
	@Query("select distinct d.drivers from Driver d")
	List<String> getAllDrivers();
}
