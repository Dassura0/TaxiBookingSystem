import React, { useEffect, useState } from 'react';
import { getCabs } from '../api';

const CabList = () => {
  const [cabs, setCabs] = useState([]);

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

  return (
    <div>
      <h1>Cab List</h1>
      <ul>
        {cabs.map(cab => (
          <li key={cab.id}>
            {cab.model} - {cab.licensePlate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CabList;
