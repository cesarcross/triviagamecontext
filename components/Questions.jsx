import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Questions = ({
  score,
  setScore,
  questions,
  setQuestions,
  navigation,
  questionIndex,
  setQuestionIndex,
}) => {
  const fetchQuestions = async () => {
    try {
      const response = await axios(
        `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
      );

      const data = response.data.results;

      // key property to be extracted from Flatlist
      // data.forEach((item) => (item.key = String(Math.random() * 50)));

      setQuestions(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // console.log(questions);

  const handleNextQuestion = () => {
    // console.log(questionIndex, 9);

    if (questionIndex === 9) {
      navigation.navigate('Results');
    } else setQuestionIndex(questionIndex + 1);
  };

  const playerChoice = (choice) => {
    console.log(choice, questions[questionIndex].correct_answer);

    if (choice === questions[questionIndex].correct_answer) {
      setScore(score + 1);
    }

    // setQuestionIndex(questionIndex + 1);

    handleNextQuestion();
  };

  return (
    <View>
      <Text>Question {questionIndex + 1}</Text>
      <Text>
        {questions.length > 0 ? questions[questionIndex].question : ''}
      </Text>
      <Button
        title='True'
        onPress={() => playerChoice('True')}
        color='#f194ff'
      />
      <Button
        title='False'
        onPress={() => playerChoice('False')}
        color='#f194ff'
      />
      <Text>
        {score} / {questions.length}
      </Text>
    </View>
  );
};

export default Questions;
