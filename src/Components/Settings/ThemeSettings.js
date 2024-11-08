// src/Components/Settings/ThemeSettings.js

import React, { useEffect, useState } from 'react';

const ThemeSettings = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    useEffect(() => {
        const theme = isDarkTheme ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDarkTheme]);

    return (
        <div className="settings-section theme-settings">
            <h2>Theme Settings</h2>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                    id="theme-toggle"
                />
                <span className="slider"></span>
            </label>
            <span className='theme-mode-label'>{isDarkTheme ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
    );
};

export default ThemeSettings;
