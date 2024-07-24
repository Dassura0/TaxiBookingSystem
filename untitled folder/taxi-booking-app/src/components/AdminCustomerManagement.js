import React, { useEffect, useState } from 'react';
import { getCustomers, updateCustomer, deleteCustomer } from '../api';

const AdminCustomerManagement = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    getCustomers()
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSave = (id, customer) => {
    updateCustomer(id, customer)
      .then(() => {
        fetchCustomers();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    deleteCustomer(id)
      .then(() => {
        fetchCustomers();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Admin Customer Management</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
            <button onClick={() => handleSave(customer.id, { ...customer })}>Save</button>
            <button onClick={() => handleDelete(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCustomerManagement;
