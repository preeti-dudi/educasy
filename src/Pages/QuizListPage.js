// src/pages/QuizListPage.js
import React, { useState } from 'react';
import QuizList from '../Components/Quiz/QuizList';
import { useNavigate } from 'react-router-dom';
import '../Styles/QuizStyles.css'

const QuizListPage = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: 'General Knowledge Quiz',
      description: 'Test your general knowledge with these questions!',
      questions: [
        {
          id: 1,
          text: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin'],
        },
        {
          id: 2,
          text: 'What is 2 + 2?',
          options: ['3', '4', '5'],
        },
      ],
    },
    // Add more quiz objects here...
  ]);

  const handleQuizClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="quiz-list-page">
      <h2>Quizzes</h2>
      <QuizList quizzes={quizzes} onQuizClick={handleQuizClick} />
    </div>
  );
};

export default QuizListPage;
