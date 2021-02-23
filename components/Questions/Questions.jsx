import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TriviaContext } from '../../contexts/TriviaContext';
import { fallbackData } from '../../utils/fallbackData';
import {
  Container,
  QuestionCategory,
  QuestionNumber,
  QuestionText,
  ChoiceButton,
  ChoiceText,
} from './Questions.styles';

const Questions = ({ navigation }) => {
  const {
    loading,
    setLoading,
    score,
    setScore,
    questions,
    setQuestions,
    questionIndex,
    setQuestionIndex,
  } = useContext(TriviaContext);

  const fetchQuestions = async () => {
    const setData = (data) =>
      data.map((item) => {
        item.key = String(Math.random() * 50);
        return item;
      });

    try {
      const response = await axios(
        `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
      );

      const data = response.data.results;

      const newData = setData(data);
      setQuestions(newData);
    } catch (err) {
      console.log(err.message);

      const dataBackup = setData(fallbackData);
      setQuestions(dataBackup);
    }
  };

  useEffect(() => {
    fetchQuestions();
    setLoading(false);
  }, [loading]);

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
