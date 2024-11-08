// src/Pages/ProfilePage.js

import React from 'react';
import Achievements from '../Components/Profile/Achievements';
import ActivityLogs from '../Components/Profile/ActivityLogs';
import BookmarkContent from '../Components/Profile/BookmarkContent';
import ProfileInfo from '../Components/Profile/ProfileInfo';
import ProfileSettings from '../Components/Profile/ProfileSettings';
import ProfileProgress from '../Components/Profile/Progress';
import { FaUserCircle, FaTrophy, FaMedal } from 'react-icons/fa';

import '../Styles/ProfileStyles.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h2>Welcome to Your Profile</h2>
      </div>
      <div className="profile-container">
        <ProfileInfo />
        <ProfileProgress percentage={50} />
        <Achievements />
        <ActivityLogs />
        <BookmarkContent />
        <ProfileSettings />
      </div>
    </div>
  );
};

export default ProfilePage;
