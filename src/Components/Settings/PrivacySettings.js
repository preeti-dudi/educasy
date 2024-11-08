// src/Components/Settings/PrivacySettings.js

import React from 'react';

const PrivacySettings = () => {
    return (
        <div className="settings-section privacy-settings">
            <h2>Privacy Settings</h2>
            <label>
                <input type="checkbox" />
                Share my profile publicly
            </label>
            <label>
                <input type="checkbox" />
                Allow others to message me
            </label>
        </div>
    );
};

export default PrivacySettings;
