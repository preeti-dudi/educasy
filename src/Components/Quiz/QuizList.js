// src/components/QuizList.js
import React from 'react';
import QuizCard from './QuizCard';

const QuizList = ({ quizzes, onQuizClick }) => {
  return (
    <div className="quiz-list">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} onClick={onQuizClick} />
      ))}
    </div>
  );
};

export default QuizList;
