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
import AppLoading from 'expo-app-loading';
import { useFonts, Lora_400Regular } from '@expo-google-fonts/lora';

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
      <App styles={styles.container} />
    </TriviaProvider>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#4a47a3',
  },
  text: {
    fontFamily: 'Lora_400Regular',
    color: '#fff',
  },
});
