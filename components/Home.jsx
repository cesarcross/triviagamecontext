import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import {
  Container,
  Title,
  Description,
  StartButton,
  StartText,
} from './Home.styles';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <Title>Welcome to Trivia Challenge</Title>
        <Description>
          You will be presented with 10 random True or False questions. Can you
          score 100%?
        </Description>
        <StartButton onPress={() => navigation.navigate('Questions')}>
          <StartText>Start</StartText>
        </StartButton>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
