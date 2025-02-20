package com.example.wipro.demo.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity

public class Booking {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String pickupLocation;
    private String dropLocation;
    private String status;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;

    @ManyToOne
    @JoinColumn(name = "cab_id")
    private Cab cab;
    
    public Booking() {}
    
    

	public Booking(Long id, String pickupLocation, String dropLocation, String status, Customer customer, Driver driver,
			Cab cab) {
		super();
		this.id = id;
		this.pickupLocation = pickupLocation;
		this.dropLocation = dropLocation;
		this.status = status;
		this.customer = customer;
		this.driver = driver;
		this.cab = cab;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPickupLocation() {
		return pickupLocation;
	}

	public void setPickupLocation(String pickupLocation) {
		this.pickupLocation = pickupLocation;
	}

	public String getDropLocation() {
		return dropLocation;
	}

	public void setDropLocation(String dropLocation) {
		this.dropLocation = dropLocation;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}

	public Cab getCab() {
		return cab;
	}

	public void setCab(Cab cab) {
		this.cab = cab;
	}



	@Override
	public String toString() {
		return "Booking [id=" + id + ", pickupLocation=" + pickupLocation + ", dropLocation=" + dropLocation
				+ ", status=" + status + ", customer=" + customer + ", driver=" + driver + ", cab=" + cab + "]";
	}
    
    
	
	}
    
    
    


