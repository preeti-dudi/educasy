// src/Pages/CourseDetailPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseOverview from '../Components/CourseDetails/CourseOverview';
import CourseSyllabus from '../Components/CourseDetails/CourseSyllabus';
import InstructorInfo from '../Components/CourseDetails/InstructorInfo';
import CourseReviews from '../Components/CourseDetails/CourseReviews';
import '../Styles/CourseDetailStyles.css';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetching course details based on courseId
    // For demonstration, we use a mock function to simulate fetching data
    const fetchCourseData = async () => {
      const data = {
        id: courseId,
        title: 'Web Development with React',
        description:
          'Learn how to build modern, dynamic web applications with React. This course covers all essential concepts including hooks, state management, and component-based architecture.',
        syllabus: [
          'Introduction to React',
          'State and Props',
          'React Hooks',
          'Routing in React',
          'Advanced React Patterns',
        ],
        instructor: {
          name: 'John Doe',
          bio: 'A passionate software engineer with 10+ years of experience in web development.',
          image: 'https://via.placeholder.com/100',
        },
        reviews: [
          {
            user: 'Jane Smith',
            rating: 5,
            comment: 'Great course, very thorough and easy to follow.',
          },
          {
            user: 'Michael Johnson',
            rating: 4,
            comment: 'Helpful, but would have liked more examples.',
          },
        ],
        price: '$99',
      };
      setCourse(data);
    };

    fetchCourseData();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-detail-page">
      <h2 className="course-title">{course.title}</h2>

      {/* Course Overview */}
      <CourseOverview course={course} />

      {/* Course Syllabus */}
      <CourseSyllabus syllabus={course.syllabus} />

      {/* Instructor Information */}
      <InstructorInfo instructor={course.instructor} />

      {/* Course Reviews */}
      <CourseReviews reviews={course.reviews} />

      {/* Enrollment Section */}
      <div className="enrollment-section">
        <p className="course-price">{course.price}</p>
        <button className="enroll-button">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseDetailPage;
