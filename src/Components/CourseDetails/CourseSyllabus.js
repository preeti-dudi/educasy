// src/Components/Courses/CourseSyllabus.js

import React from 'react';

const CourseSyllabus = ({ syllabus }) => {
  return (
    <div className="course-syllabus">
      <h2>Syllabus</h2>
      <ul className="syllabus-list">
        {syllabus.map((topic, index) => (
          <li key={index} className="syllabus-item">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSyllabus;
