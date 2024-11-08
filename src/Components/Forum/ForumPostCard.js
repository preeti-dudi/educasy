// src/Components/Forum/Post.js

import React from 'react';
import { Link } from 'react-router-dom';

const ForumPostCard = () => {
  return (
    <div className="forum-post">
      <div className="post-header">
        <h4 className="post-title">How to Get Started with React</h4>
        <span className="post-author">Posted by John Doe</span>
      </div>
      <div className="post-body">
        <p>
          React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. Let's dive into the basics of React...
        </p>
      </div>
      <div className="post-footer">
        <span className="post-replies">5 Replies</span>
        <Link to={`/forum-details`} className="post-read-more-btn">
        Read More
        </Link>
      </div>
    </div>
  );
};

export default ForumPostCard;
