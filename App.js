import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Questions from './components/Questions';
import Results from './components/Results';
import Answers from './components/Answers';
import { TriviaContext, TriviaProvider } from './contexts/TriviaContext';
// import GlobalStyle from './globalStyles';

const Stack = createStackNavigator();

function App() {
  // const [score, setScore] = useState(0);
  // const [questions, setQuestions] = useState([]);
  // const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Questions' component={Questions} />
        <Stack.Screen name='Results' component={Results} />
        <Stack.Screen name='Answers' component={Answers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <TriviaProvider>
      <App />
    </TriviaProvider>
  );
};
