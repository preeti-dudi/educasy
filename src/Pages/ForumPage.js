// src/Pages/ForumPage.js

import React, { useState } from 'react';
import TrendingTopics from '../Components/Forum/TrendingTopics';
import SearchBar from '../Components/Forum/SearchBar';
import ForumPostCard from '../Components/Forum/ForumPostCard';
import ForumCategory from '../Components/Forum/ForumCategory';
import '../Styles/ForumStyles.css'; // Add your CSS here for styling

const ForumPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="forum-page">
      <h2 className="forum-title">Forum</h2>
      
      {/* Search Bar */}
      <div className="search-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="forum-main-content">
        {/* Trending Topics */}
        <div className="forum-trending-topics">
          <TrendingTopics />
        </div>

        <div className="forum-posts-container">
          {/* Forum Categories */}
          <ForumCategory />

          {/* Forum Posts */}
          <div className="forum-posts">
            <ForumPostCard />
            <ForumPostCard />
            <ForumPostCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ForumPage;
