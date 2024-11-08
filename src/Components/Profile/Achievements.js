// src/Components/Profile/Achievements.js

import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  return (
    <div className="achievements">
      <h3><FaTrophy /> Your Achievements</h3>
      <div className="achievement-item">
        <FaTrophy className="achievement-icon" />
        <span className="achievement-title">Completed Level 1</span>
      </div>
      <div className="achievement-item">
        <FaMedal className="achievement-icon" />
        <span className="achievement-title">Top Scorer</span>
      </div>
      <div className="achievement-item">
        <FaTrophy className="achievement-icon" />
        <span className="achievement-title">Completed Challenge</span>
      </div>
    </div>
  );
};

export default Achievements;
