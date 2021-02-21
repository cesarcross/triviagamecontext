import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Questions from './components/Questions';
import Results from './components/Results';
import Answers from './components/Answers';
import { TriviaContext } from './contexts/TriviaContext.jsx';

const Stack = createStackNavigator();

export default function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='Questions'>
          {(props) => (
            <Questions
              {...props}
              score={score}
              setScore={setScore}
              questions={questions}
              setQuestions={setQuestions}
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name='Results'>
          {(props) => (
            <Results
              {...props}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              setQuestionIndex={setQuestionIndex}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name='Answers'>
          {(props) => (
            <Answers
              {...props}
              score={score}
              questions={questions}
              questionIndex={questionIndex}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
