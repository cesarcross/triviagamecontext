import React, { useState, createContext } from 'react';

export const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  const [score, setScore] = useState({
    points: 0,
    correctAnswers: [],
    wrongAnswers: [],
  });
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const values = {
    score,
    setScore,
    questions,
    setQuestions,
    questionIndex,
    setQuestionIndex,
  };

  return (
    <TriviaContext.Provider value={values}>{children}</TriviaContext.Provider>
  );
};
