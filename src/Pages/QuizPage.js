// src/pages/QuizPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../Components/Quiz/Quiz';
import '../Styles/QuizStyles.css'

const QuizPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    // Fetch the quiz data based on the quizId
    // This is a mock, you can replace it with an actual API call
    const quizData = {
      id: quizId,
      title: `Quiz #${quizId}`,
      description: 'This is a sample quiz description.',
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
    };
    setQuiz(quizData);
  }, [quizId]);

  const handleSubmit = (answers) => {
    console.log('Quiz answers:', answers);
    // You can submit the answers to an API or handle them here
  };

  return quiz ? (
    <Quiz quiz={quiz} onSubmit={handleSubmit} />
  ) : (
    <p>Loading quiz...</p>
  );
};

export default QuizPage;
