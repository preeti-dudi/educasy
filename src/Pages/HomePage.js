import React from 'react';
import Hero from '../Components/Home/Hero';
import UserTestimony from '../Components/Home/UserTestimony';
import ForumHighlights from '../Components/Home/ForumHighlights';
import Features from '../Components/Home/Features';
import '../Styles/HomeStyles.css'

const HomePage = () => {
  // Sample data for testimonials and forum posts
  const testimonialsData = [
    { quote: "Educacy transformed my learning experience!", user: "Alex J." },
    { quote: "Amazing platform with lots of interactive content!", user: "Priya R." },
    { quote: "The progress tracking feature keeps me motivated.", user: "Michael T." },
  ];

  const forumData = [
    { id: 1, title: "Best Study Tips for Beginners", excerpt: "Check out some tips to get started with Educacy..." },
    { id: 2, title: "How to Stay Consistent with Learning Goals", excerpt: "Consistency is key! Here are some strategies to help..." },
    { id: 3, title: "Engaging with the Community", excerpt: "Discover ways to connect with fellow learners..." },
  ];

  return (
    <div className="home-page">
      <Hero />
      <Features />
      <UserTestimony testimonials={testimonialsData} />
      <ForumHighlights forumPosts={forumData} />
    </div>
  );
};

export default HomePage;
