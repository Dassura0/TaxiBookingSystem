package com.example.wipro.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.wipro.demo.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
