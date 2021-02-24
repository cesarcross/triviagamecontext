import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { TriviaContext } from '../../stores/TriviaContext.jsx';
import {
  Container,
  Greeting,
  Score,
  ScoreText,
  ResultsButton,
  ResultsText,
} from './Results.styles.js';

const Results = ({ navigation }) => {
  const {
    score,
    setScore,
    setQuestions,
    setQuestionIndex,
    setLoading,
  } = useContext(TriviaContext);

  const handlePlayAgain = () => {
    setScore({
      points: 0,
      correctAnwers: [],
      wrongAnswers: [],
    });
    setQuestions([]);
    setQuestionIndex(0);
    setLoading(true);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <Container>
        <Greeting>Thanks for playing</Greeting>
        <ScoreText>{"That's your score"}</ScoreText>
        <Score>{score.points}/10</Score>
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
