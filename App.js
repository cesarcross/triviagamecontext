import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Lora_400Regular } from '@expo-google-fonts/lora';
import AppLoading from 'expo-app-loading';
import { TriviaProvider } from './contexts/TriviaContext';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Results from './components/Results/Results';
import Answers from './components/Answers/Answers';

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
      <App />
    </TriviaProvider>
  );
};
