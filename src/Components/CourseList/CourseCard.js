// src/Components/Courses/CourseCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-info">
        <h2>{course.title}</h2>
        <p className="course-description">{course.description}</p>
        <p className="course-duration">Duration: {course.duration}</p>
        <p className="course-level">Level: {course.level}</p>
        <Link to={`/course-details`} className="course-link">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
