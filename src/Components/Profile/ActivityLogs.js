// src/Components/Profile/ActivityLogs.js

import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ActivityLogs = () => {
  return (
    <div className="activity-logs">
      <h3>Activity Logs</h3>
      <ul>
        <li><FaCheckCircle className="activity-icon" /> Achieved 50 points today</li>
        <li><FaExclamationCircle className="activity-icon" /> Missed a daily challenge</li>
        <li><FaCheckCircle className="activity-icon" /> Completed tutorial on React</li>
      </ul>
    </div>
  );
};

export default ActivityLogs;
