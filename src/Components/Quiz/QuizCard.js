// src/components/QuizCard.js
import React from 'react';

const QuizCard = ({ quiz, onClick }) => {
  return (
    <div className="quiz-card" onClick={() => onClick(quiz.id)}>
      <h3 >{quiz.title}</h3>
      <p>{quiz.description}</p>
      <button className="quiz-button">Start Quiz</button>
    </div>
  );
};

export default QuizCard;
