import React, { useEffect, useState } from 'react';
import { getCustomer, updateCustomer } from '../api';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    getCustomer(/* userId */)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSave = () => {
    updateCustomer(profile.id, profile)
      .then(() => {
        setEditMode(false);
        fetchProfile();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Profile</h1>
      {editMode ? (
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          {/* Add other profile fields */}
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          {/* Add other profile fields */}
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
