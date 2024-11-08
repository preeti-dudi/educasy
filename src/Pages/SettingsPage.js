// src/Pages/SettingsPage.js

import React from 'react';
import PrivacySettings from '../Components/Settings/PrivacySettings';
import NotificationPreference from '../Components/Settings/NotificationPreference';
import DeactivationSettings from '../Components/Settings/DeactivationSettings';
import AccountSettings from '../Components/Settings/AccountSettings';
import ThemeSettings from '../Components/Settings/ThemeSettings';
import '../Styles/SettingsStyles.css';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="settings-sections">
        <PrivacySettings />
        <NotificationPreference />
        <DeactivationSettings />
        <AccountSettings />
        <ThemeSettings />
      </div>
    </div>
  );
};

export default SettingsPage;
