import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TriviaContext } from '../contexts/TriviaContext';
import {
  Container,
  QuestionCategory,
  QuestionNumber,
  QuestionText,
  ChoiceButton,
} from './Questions.styles';

const Questions = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  const {
    score,
    setScore,
    questions,
    setQuestions,
    questionIndex,
    setQuestionIndex,
  } = useContext(TriviaContext);

  const fetchQuestions = async () => {
    // setLoading(true);
    try {
      const response = await axios(
        `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
      );

      const data = response.data.results;

      // data ? setLoading(false) : setLoading(true);

      const newData = data.map(function (item) {
        item.key = String(Math.floor(Math.random() * 100));
        return item;
      });

      setQuestions(newData);
    } catch (err) {
      console.log(err.message);
    }
  };

  // if (loading) return <Text>Loading...</Text>;

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (questionIndex === 9) {
      navigation.navigate('Results');
    } else setQuestionIndex(questionIndex + 1);
  };

  const playerChoice = (choice) => {
    console.log(choice, questions[questionIndex].correct_answer);

    if (choice === questions[questionIndex].correct_answer) {
      setScore(score + 1);
    }

    handleNextQuestion();
  };

  return (
    <Container>
      <QuestionCategory>
        {questions.length > 0 ? questions[questionIndex].category : ''}
      </QuestionCategory>
      <QuestionNumber>Question {questionIndex + 1}:</QuestionNumber>

      <QuestionText>
        {questions.length > 0 ? questions[questionIndex].question : ''}
      </QuestionText>
      <ChoiceButton
        title='True'
        onPress={() => playerChoice('True')}
        color='#f194ff'
      />
      <Button
        title='False'
        onPress={() => playerChoice('False')}
        color='#f194ff'
      />
      {/* <Text>
        {score} / {questions.length}
      </Text> */}
    </Container>
  );
};

export default Questions;
