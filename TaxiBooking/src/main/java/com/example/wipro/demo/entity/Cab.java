package com.example.wipro.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity

public class Cab {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String model;
	private String carType;
	private Boolean availability;
	
	@ManyToOne
	@JoinColumn(name = "driver_id")
	private Driver driver;
	
	public Cab(){}
	
	public Cab(Long id, String model, String carType, Boolean availability, Driver driver) {
		super();
		this.id = id;
		this.model = model;
		this.carType = carType;
		this.availability = availability;
		this.driver = driver;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public Boolean getAvailability() {
		return availability;
	}

	public void setAvailability(Boolean availability) {
		this.availability = availability;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}

	@Override
	public String toString() {
		return "Cab [id=" + id + ", model=" + model + ", carType=" + carType + ", availability=" + availability
				+ ", driver=" + driver + "]";
	}
	
	
	
	
}
