// src/Components/Courses/CourseReviews.js

import React from 'react';

const CourseReviews = ({ reviews }) => {
  return (
    <div className="course-reviews">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p className="review-user">{review.user}</p>
          <p className="review-rating">Rating: {review.rating} / 5</p>
          <p className="review-comment">"{review.comment}"</p>
        </div>
      ))}
    </div>
  );
};

export default CourseReviews;
