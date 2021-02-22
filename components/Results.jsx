import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TriviaContext } from '../contexts/TriviaContext.jsx';
import { Container, Greeting, Score, ScoreText } from './Results.styles.js';

const Results = ({ navigation }) => {
  const { score, setScore, setQuestions, setQuestionIndex } = useContext(
    TriviaContext
  );

  const handlePlayAgain = () => {
    setScore(0);
    setQuestions([]);
    setQuestionIndex(0);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Greeting>Thanks for playing</Greeting>
      <ScoreText>{`That's your score`}</ScoreText>
      <Score>{score}/10</Score>
      <Button
        title='Check Answers'
        onPress={() => navigation.navigate('Answers')}
        color='#b68973'
      />
      <Button title='Play Again' onPress={handlePlayAgain} color='#b68973' />
    </Container>
  );
};

export default Results;
