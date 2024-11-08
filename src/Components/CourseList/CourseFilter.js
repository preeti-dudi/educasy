// src/Components/Courses/CourseFilter.js

import React from 'react';

const CourseFilter = ({ onFilterChange }) => {
  return (
    <div className="course-filter">
      <label htmlFor="level-filter">Filter by Level: </label>
      <select id="level-filter" onChange={onFilterChange}>
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
};

export default CourseFilter;
