import React, { useEffect, useState } from 'react';
import { getCabs, updateCab, deleteCab, createCab } from '../api';

const AdminCabManagement = () => {
  const [cabs, setCabs] = useState([]);
  const [newCab, setNewCab] = useState({ model: '', licensePlate: '', availability: true });

  useEffect(() => {
    fetchCabs();
  }, []);

  const fetchCabs = () => {
    getCabs()
      .then(response => {
        setCabs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSave = (id, cab) => {
    updateCab(id, cab)
      .then(() => {
        fetchCabs();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    deleteCab(id)
      .then(() => {
        fetchCabs();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCreate = () => {
    createCab(newCab)
      .then(() => {
        setNewCab({ model: '', licensePlate: '', availability: true });
        fetchCabs();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Admin Cab Management</h1>
      <div>
        <input
          type="text"
          placeholder="Model"
          value={newCab.model}
          onChange={(e) => setNewCab({ ...newCab, model: e.target.value })}
        />
        <input
          type="text"
          placeholder="License Plate"
          value={newCab.licensePlate}
          onChange={(e) => setNewCab({ ...newCab, licensePlate: e.target.value })}
        />
        <button onClick={handleCreate}>Add Cab</button>
      </div>
      <ul>
        {cabs.map(cab => (
          <li key={cab.id}>
            {cab.model} - {cab.licensePlate}
            <button onClick={() => handleSave(cab.id, { ...cab, availability: !cab.availability })}>
              {cab.availability ? 'Disable' : 'Enable'}
            </button>
            <button onClick={() => handleDelete(cab.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCabManagement;
