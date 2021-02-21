import { useState, createContext } from 'react';

export const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const str = 'context here';

  const values = {
    score,
    setScore,
    str,
  };

  return (
    <TriviaContext.Provider value={values}>{children}</TriviaContext.Provider>
  );
};
