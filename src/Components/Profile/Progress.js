// src/Components/Profile/Progress.js

import React from 'react';
import { FaStar } from 'react-icons/fa';

const Progress = () => {
  return (
    <div className="progress">
      <h3><FaStar /> Your Progress</h3>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '70%' }}></div>
      </div>
      <span>70% of your goals achieved!</span>
    </div>
  );
};

export default Progress;
