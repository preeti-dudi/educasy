// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ArticlePage from './Pages/ArticlePage';
import ChatPage from './Pages/ChatPage';
import CourseListPage from './Pages/CourseListPage';
import ExplorePage from './Pages/ExplorePage';
import ForumPage from './Pages/ForumPage';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import QuizListPage from './Pages/QuizListPage';
import SettingsPage from './Pages/SettingsPage';
import SurveyPage from './Pages/SurveyPage';
import VideoPage from './Pages/VideoPage';
import './App.css';
import CourseDetailPage from './Pages/CourseDetailPage';
import ForumDetailPage from './Pages/ForumDetailPage';
import QuizPage from './Pages/QuizPage';
import Footer from './Components/Footer';

function App() {

  const isAuthenticated=true;

  return (
    <Router>
      {isAuthenticated && 
      <Header /> }
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/courses" element={<CourseListPage />} />
          <Route path="/course-details" element={<CourseDetailPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/forum-details" element={<ForumDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/quiz" element={<QuizListPage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/videos" element={<VideoPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
