// src/Components/Courses/InstructorInfo.js

import React from 'react';

const InstructorInfo = ({ instructor }) => {
  return (
    <div className="instructor-info">
      <h2>Instructor</h2>
      <div className="instructor-details">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="instructor-image"
        />
        <div className="instructor-bio">
          <h3>{instructor.name}</h3>
          <p className="instructor-bio-text">{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorInfo;
