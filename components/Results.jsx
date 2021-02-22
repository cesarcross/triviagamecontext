import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TriviaContext } from '../contexts/TriviaContext.jsx';

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
    <View>
      <Text>Thanks for playing</Text>
      <Text>That is your score</Text>
      <Text>{score} / 10</Text>
      <Button
        title='Check Answers'
        onPress={() => navigation.navigate('Answers')}
        color='#b68973'
      />
      <Button title='Play Again' onPress={handlePlayAgain} color='#b68973' />
    </View>
  );
};

export default Results;
