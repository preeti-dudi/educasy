// src/Components/Courses/CourseOverview.js

import React from 'react';

const CourseOverview = ({ course }) => {
  return (
    <div className="course-overview">
      <p className="course-description">{course.description}</p>
    </div>
  );
};

export default CourseOverview;
