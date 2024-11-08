// src/Pages/CoursePage.js

import React, { useState } from 'react';
import CourseList from '../Components/CourseList/CourseList';
import CourseFilter from '../Components/CourseList/CourseFilter';
import '../Styles/CourseStyles.css';

const CourseListPage = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="course-page">
      <h2 className="page-title">All Courses</h2>
      
      {/* Filter Section */}
      <CourseFilter onFilterChange={handleFilterChange} />
      
      {/* List of Courses */}
      <CourseList filter={filter} />
    </div>
  );
};

export default CourseListPage;
