import React, { useEffect, useState } from 'react';
import { getDrivers, updateDriver, deleteDriver, createDriver } from '../api';

const AdminDriverManagement = () => {
  const [drivers, setDrivers] = useState([]);
  const [newDriver, setNewDriver] = useState({ username: '', password: '', email: '', firstName: '', lastName: '', phoneNumber: '', licenseNumber: '' });

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = () => {
    getDrivers()
      .then(response => {
        setDrivers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSave = (id, driver) => {
    updateDriver(id, driver)
      .then(() => {
        fetchDrivers();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    deleteDriver(id)
      .then(() => {
        fetchDrivers();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCreate = () => {
    createDriver(newDriver)
      .then(() => {
        setNewDriver({ username: '', password: '', email: '', firstName: '', lastName: '', phoneNumber: '', licenseNumber: '' });
        fetchDrivers();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Admin Driver Management</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={newDriver.username}
          onChange={(e) => setNewDriver({ ...newDriver, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={newDriver.password}
          onChange={(e) => setNewDriver({ ...newDriver, password: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newDriver.email}
          onChange={(e) => setNewDriver({ ...newDriver, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="First Name"
          value={newDriver.firstName}
          onChange={(e) => setNewDriver({ ...newDriver, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newDriver.lastName}
          onChange={(e) => setNewDriver({ ...newDriver, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newDriver.phoneNumber}
          onChange={(e) => setNewDriver({ ...newDriver, phoneNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="License Number"
          value={newDriver.licenseNumber}
          onChange={(e) => setNewDriver({ ...newDriver, licenseNumber: e.target.value })}
        />
        <button onClick={handleCreate}>Add Driver</button>
      </div>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id}>
            {driver.firstName} {driver.lastName}
            <button onClick={() => handleSave(driver.id, { ...driver, approvalStatus: !driver.approvalStatus })}>
              {driver.approvalStatus ? 'Disapprove' : 'Approve'}
            </button>
            <button onClick={() => handleDelete(driver.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDriverManagement;
