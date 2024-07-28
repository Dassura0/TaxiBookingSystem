import React, { useState } from 'react';
import './Admin.css';


function DriverManagement() {
  const [drivers, setDrivers] = useState([]);

  const addDriver = () => {
    const newDriver = prompt('Enter driver details:');
    if (newDriver) setDrivers([...drivers, newDriver]);
  };

  const deleteDriver = (index) => {
    setDrivers(drivers.filter((_, i) => i !== index));
  };

  return (
    <div className="management">
      <h2>Driver Management</h2>
      <button onClick={addDriver}>Add Driver</button>
      <ul>
        {drivers.map((driver, index) => (
          <li key={index}>
            {driver} <button onClick={() => deleteDriver(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DriverManagement;
