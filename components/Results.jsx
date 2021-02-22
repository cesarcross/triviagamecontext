import React, { useContext } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { TriviaContext } from '../contexts/TriviaContext.jsx';
import {
  Container,
  Greeting,
  Score,
  ScoreText,
  ResultsButton,
  ResultsText,
} from './Results.styles.js';

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
    <SafeAreaView>
      <Container>
        <Greeting>Thanks for playing</Greeting>
        <ScoreText>{`That's your score`}</ScoreText>
        <Score>{score}/10</Score>

        <ResultsButton onPress={() => navigation.navigate('Answers')}>
          <ResultsText>Check Answers</ResultsText>
        </ResultsButton>
        <ResultsButton onPress={handlePlayAgain}>
          <ResultsText>Play Again</ResultsText>
        </ResultsButton>
      </Container>
    </SafeAreaView>
  );
};

export default Results;
