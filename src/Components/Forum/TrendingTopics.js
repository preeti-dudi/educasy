// src/Components/Forum/TrendingTopics.js

import React from 'react';

const TrendingTopics = () => {
  const topics = ['React Basics', 'JavaScript Best Practices', 'Web Development Trends', 'AI in Web Design'];

  return (
    <div className="trending-topics">
      <h3>Trending Topics</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <a href={`#${topic.replace(' ', '-')}`} className="trending-topic-link">{topic}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
