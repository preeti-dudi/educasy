// src/Components/Profile/BookmarkContent.js

import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const BookmarkContent = () => {
  return (
    <div className="bookmarked-content">
      <h3><FaBookmark /> Bookmarked Content</h3>
      <ul>
        <li>Learn JavaScript Basics</li>
        <li>Advanced CSS Tips</li>
        <li>React Hooks Guide</li>
      </ul>
    </div>
  );
};

export default BookmarkContent;
