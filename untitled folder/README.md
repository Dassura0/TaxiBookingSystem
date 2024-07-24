# Entities and Attributes for Online Taxi Booking Application

## Customer
- **id**: Long (Primary Key)
- **username**: String
- **password**: String
- **email**: String
- **firstName**: String
- **lastName**: String
- **phoneNumber**: String
- **profilePicture**: String
- **bookings**: List<Booking> (Relationship to Booking entity)

## Admin
- **id**: Long (Primary Key)
- **username**: String
- **password**: String
- **email**: String
- **firstName**: String
- **lastName**: String
- **phoneNumber**: String

## Driver
- **id**: Long (Primary Key)
- **username**: String
- **password**: String
- **email**: String
- **firstName**: String
- **lastName**: String
- **phoneNumber**: String
- **licenseNumber**: String
- **approvalStatus**: Boolean
- **cabs**: List<Cab> (Relationship to Cab entity)
- **bookings**: List<Booking> (Relationship to Booking entity)

## Cab
- **id**: Long (Primary Key)
- **model**: String
- **licensePlate**: String
- **availability**: Boolean
- **driver**: Driver (Relationship to Driver entity)

## Booking
- **id**: Long (Primary Key)
- **customer**: Customer (Relationship to Customer entity)
- **driver**: Driver (Relationship to Driver entity)
- **cab**: Cab (Relationship to Cab entity)
- **pickupLocation**: String
- **dropLocation**: String
- **bookingTime**: LocalDateTime
- **status**: String
# TaxiBookingSystem
