// src/Components/Settings/NotificationPreference.js

import React from 'react';

const NotificationPreference = () => {
    return (
        <div className="settings-section notification-preference">
            <h2>Notification Preferences</h2>
            <label>
                <input type="checkbox" />
                Email Notifications
            </label>
            <label>
                <input type="checkbox" />
                Push Notifications
            </label>
        </div>
    );
};

export default NotificationPreference;
