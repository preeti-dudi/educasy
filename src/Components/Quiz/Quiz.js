// src/components/QuizPage.js
import React, { useState } from 'react';

const Quiz = ({ quiz, onSubmit }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const existingAnswer = newAnswers.find((ans) => ans.questionId === questionId);
      if (existingAnswer) {
        existingAnswer.answer = answer;
      } else {
        newAnswers.push({ questionId, answer });
      }
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    onSubmit(selectedAnswers);
  };

  return (
    <div className="quiz-page">
      <h2>{quiz.title}</h2>
      <p className='center-text'>{quiz.description}</p>

      <ol className="questions">
        {quiz.questions.map((question) => (
          <li key={question.id} className="question">
            <h3>{question.text}</h3>
            <div className="options">
              {question.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={selectedAnswers.find((ans) => ans.questionId === question.id)?.answer === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default Quiz;
