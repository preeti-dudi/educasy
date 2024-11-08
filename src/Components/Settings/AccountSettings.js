// src/Components/Settings/AccountSettings.js

import React from 'react';

const AccountSettings = () => {
    return (
        <div className="settings-section account-settings">
            <h2>Account Settings</h2>
            <label>
                <input type="text" placeholder="Change username" />
            </label>
            <label>
                <input type="email" placeholder="Change email" />
            </label>
        </div>
    );
};

export default AccountSettings;
