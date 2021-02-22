import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TriviaContext } from '../contexts/TriviaContext.jsx';
import {
  AnswersList,
  Container,
  ReturnText,
  Score,
  Title,
  AnswersItem,
} from './Answers.styles.js';

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
    <SafeAreaView>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}>
          <ReturnText>Return</ReturnText>
        </TouchableOpacity>
        {/* <Button title='<--' color='#b68973' /> */}
        <Title>Answers</Title>
        <Score>
          {score}/{questions.length}
        </Score>

        <FlatList
          data={questions}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <AnswersItem>{item.question}</AnswersItem>}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Answers;
