// src/components/Home/PlatformFeatures.js

import React from 'react';
import { Link } from 'react-router-dom';

const featuresData = [
  {
    title: 'Watch Videos',
    description: 'Engage with interactive, high-quality video lessons on various topics.',
    icon: '🎥',
    link:'/videos'
  },
  {
    title: 'Read Articles',
    description: 'Access in-depth articles that cover the latest trends and knowledge.',
    icon: '📄',
    link:'/articles'
  },
  {
    title: 'Take Quizzes',
    description: 'Test your understanding with quizzes that track your progress.',
    icon: '📝',
    link:'/quiz'
  },
  {
    title: 'Interactive Activities',
    description: 'Participate in activities designed to enhance practical skills.',
    icon: '🎮',
    link:'/explore'
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with visual progress indicators.',
    icon: '📊',
    link:'/profile'
  },
  {
    title: 'Gamification',
    description: 'Earn rewards and achievements as you complete tasks and quizzes.',
    icon: '🏆',
    link:'/explore'
  },
  {
    title: 'Community Forums',
    description: 'Join discussions with peers and experts in the community forums.',
    icon: '💬',
    link:'/forums'
  },
  {
    title: 'Surveys & Feedback',
    description: 'Share your insights through surveys and personalized feedback.',
    icon: '📋',
    link:'/survey'
  },
];

const PlatformFeatures = () => (
  <section className="platform-features">
    <h2>Platform Features</h2>
    <div className="feature-cards">
      {featuresData.map((feature, index) => (
        <Link to={feature.link} >
        <div className="feature-card" key={index}>
          <span className="feature-icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
        </Link>
      ))}
    </div>
  </section>
);

export default PlatformFeatures;
