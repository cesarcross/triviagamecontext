import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TriviaContext } from '../contexts/TriviaContext.jsx';
import { AnswersList, Container, Score, Title } from './Answers.styles.js';

const Answers = ({ navigation }) => {
  const { score, questions, questionIndex } = useContext(TriviaContext);
  const [checkAnswer, setCheckAnswer] = useState('');

  const checkAnswerItem = () => {
    questions.forEach((q) => {
      if (score > 0) {
        return 'V';
      } else return 'X';
    });
  };

  return (
    <Container>
      <Button
        title='<--'
        onPress={() => navigation.navigate('Results')}
        color='#b68973'
      />
      <Title>Answers</Title>
      <Score>
        {score}/{questions.length}
      </Score>

      <AnswersList
        data={questions}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text>{item.question}</Text>}
      />
    </Container>
  );
};

export default Answers;
