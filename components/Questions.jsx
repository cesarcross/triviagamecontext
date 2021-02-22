import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TriviaContext } from '../contexts/TriviaContext';
import {
  Container,
  QuestionCategory,
  QuestionNumber,
  QuestionText,
  ChoiceButton,
  ChoiceText,
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

      const newData = data.map((item) => {
        item.key = Math.random().toString(36).substr(2, 9);
        return item;
      });

      setQuestions(newData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchQuestions();
    setLoading(false);
  }, []);

  const handleNextQuestion = () => {
    if (questionIndex === 9) {
      navigation.navigate('Results');
    } else setQuestionIndex(questionIndex + 1);
  };

  const playerChoice = (choice) => {
    console.log(choice, questions[questionIndex].correct_answer);
    if (choice === questions[questionIndex].correct_answer) {
      setScore({
        ...score,
        points: score.points + 1,
        correctAnswers: [...score.correctAnswers, questions[questionIndex].key],
      });
    } else {
      setScore({
        ...score,
        wrongAnswers: [...score.wrongAnswers, questions[questionIndex].key],
      });
    }

    handleNextQuestion();
  };

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <SafeAreaView>
      <Container>
        <QuestionCategory>
          {questions.length > 0 ? questions[questionIndex].category : ''}
        </QuestionCategory>
        <QuestionNumber>Question {questionIndex + 1}:</QuestionNumber>
        <QuestionText>
          {questions.length > 0 ? questions[questionIndex].question : ''}
        </QuestionText>
        <ChoiceButton title='True' onPress={() => playerChoice('True')}>
          <ChoiceText>True</ChoiceText>
        </ChoiceButton>
        <ChoiceButton onPress={() => playerChoice('False')}>
          <ChoiceText>False</ChoiceText>
        </ChoiceButton>
      </Container>
    </SafeAreaView>
  );
};

export default Questions;
