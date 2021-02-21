import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Trivia Challenge</Text>
      <Text>
        You will be presented with 10 random True or False questions. Can you
        score 100%?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Questions')}>
        <Text>Start</Text>
        {/* <Button>Get Started</Button> */}
      </TouchableOpacity>
    </View>
  );
};

export default Home;
