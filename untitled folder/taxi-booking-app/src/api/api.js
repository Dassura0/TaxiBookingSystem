import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// User Authentication
export const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const signup = (user) => {
  return axios.post(`${API_URL}/signup`, user);
};

// Customer APIs
export const getCustomers = () => {
  return axios.get(`${API_URL}/customers`);
};

export const updateCustomer = (id, customer) => {
  return axios.put(`${API_URL}/customers/${id}`, customer);
};

export const deleteCustomer = (id) => {
  return axios.delete(`${API_URL}/customers/${id}`);
};

// Driver APIs
export const getDrivers = () => {
  return axios.get(`${API_URL}/drivers`);
};

export const updateDriver = (id, driver) => {
  return axios.put(`${API_URL}/drivers/${id}`, driver);
};

export const deleteDriver = (id) => {
  return axios.delete(`${API_URL}/drivers/${id}`);
};

// Cab APIs
export const getCabs = () => {
  return axios.get(`${API_URL}/cabs`);
};

export const updateCab = (id, cab) => {
  return axios.put(`${API_URL}/cabs/${id}`, cab);
};

export const deleteCab = (id) => {
  return axios.delete(`${API_URL}/cabs/${id}`);
};

// Booking APIs
export const getBookings = () => {
  return axios.get(`${API_URL}/bookings`);
};

export const createBooking = (booking) => {
  return axios.post(`${API_URL}/bookings`, booking);
};

export const updateBooking = (id, booking) => {
  return axios.put(`${API_URL}/bookings/${id}`, booking);
};

export const deleteBooking = (id) => {
  return axios.delete(`${API_URL}/bookings/${id}`);
};
