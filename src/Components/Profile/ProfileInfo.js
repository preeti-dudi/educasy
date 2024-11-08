// src/Components/Profile/ProfileInfo.js

import React from 'react';
import { FaUser, FaBirthdayCake } from 'react-icons/fa';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <h3><FaUser /> Profile Info</h3>
      <div className="profile-detail">
        <p>Name: John Doe</p>
        <p><FaBirthdayCake /> Birthday: January 1, 1990</p>
        <p>Location: Planet Earth</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
