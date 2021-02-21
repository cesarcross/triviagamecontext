import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Questions from './components/Questions';
import Results from './components/Results';
import Answers from './components/Answers';

const Stack = createStackNavigator();

export default function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <NavigationContainer>
      {/* <SafeAreaView> */}
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} styles={styles.container} />
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
          {(props) => <Results {...props} score={score} setScore={setScore} />}
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
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0a500',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
