import React, { useState } from 'react';

function CabManagement() {
  const [cabs, setCabs] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    cabNumber: '',
    cabType: '',
    perKmRate: '',
    cabName: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addOrUpdateCab = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update existing cab
      const updatedCabs = [...cabs];
      updatedCabs[editingIndex] = formData;
      setCabs(updatedCabs);
      setEditingIndex(null);
    } else {
      // Add new cab
      setCabs([...cabs, formData]);
    }
    setFormData({
      cabNumber: '',
      cabType: '',
      perKmRate: '',
      cabName: '',
    });
    setModalVisible(false);
  };

  const deleteCab = (index) => {
    setCabs(cabs.filter((_, i) => i !== index));
  };

  const editCab = (index) => {
    setFormData(cabs[index]);
    setEditingIndex(index);
    setModalVisible(true); // Open the modal when editing
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setFormData({
      cabNumber: '',
      cabType: '',
      perKmRate: '',
      cabName: '',
    });
    setEditingIndex(null); // Clear editing state on close
  };

  return (
    <div className='cab-management'>
      <div className='car-header'>
        <h2>Cab Management</h2>
        <button type="button" className='add-btn' onClick={openModal}>
          {'Add Cab'}
        </button>
      </div>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form onSubmit={addOrUpdateCab}>
              <div>
                <label>
                  Cab Number:
                  <input
                    type="text"
                    name="cabNumber"
                    value={formData.cabNumber}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Cab Type:
                  <input
                    type="text"
                    name="cabType"
                    value={formData.cabType}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Per Km Rate:
                  <input
                    type="number"
                    name="perKmRate"
                    value={formData.perKmRate}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Cab Name:
                  <input
                    type="text"
                    name="cabName"
                    value={formData.cabName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <button type="submit">
                {editingIndex !== null ? 'Update Cab' : 'Add Cab'}
              </button>
            </form>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Cab ID</th>
            <th>Cab Type</th>
            <th>Per Km Rate</th>
            <th>Cab Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cabs.map((cab, index) => (
            <tr key={index}>
              <td>{cab.cabNumber}</td>
              <td>{cab.cabType}</td>
              <td>{cab.perKmRate}</td>
              <td>{cab.cabName}</td>
              <td>
                <button onClick={() => editCab(index)}>Edit</button>
                <button onClick={() => deleteCab(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CabManagement;
