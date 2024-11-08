// src/Components/Forum/ForumCategory.js

import React from 'react';

const ForumCategory = () => {
  const categories = ['Web Development', 'JavaScript', 'React', 'Design', 'AI & ML'];

  return (
    <div className="forum-categories">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category.replace(' ', '-')}`} className="forum-category-link">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumCategory;
