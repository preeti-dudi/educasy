// src/Components/Courses/CourseList.js

import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Sample data for courses
    const fetchedCourses = [
      {
        id: 1,
        title: 'Introduction to AI',
        description: 'Learn the basics of Artificial Intelligence and Machine Learning.',
        duration: '8 hours',
        level: 'Beginner',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 2,
        title: 'Advanced JavaScript',
        description: 'Deep dive into advanced JavaScript concepts and practices.',
        duration: '12 hours',
        level: 'Advanced',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 3,
        title: 'Web Development with React',
        description: 'Build modern web apps using React.js.',
        duration: '15 hours',
        level: 'Intermediate',
        image: 'https://via.placeholder.com/300',
      },
    ];

    setCourses(fetchedCourses);
  }, []);

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
