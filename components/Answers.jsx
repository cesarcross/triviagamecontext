import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TriviaContext } from '../contexts/TriviaContext.jsx';

const Answers = ({ navigation }) => {
  const { score, questions, questionIndex } = useContext(TriviaContext);
  const [checkAnswer, setCheckAnswer] = useState('');

  const checkAnswerItem = () => {
    questions.forEach((q) => {
      if (score > 0) {
        return 'V';
      } else return 'X';
    });
  };

  return (
    <View>
      <Text>Answers</Text>
      <Text>
        {score}/{questions.length}
      </Text>

      <FlatList
        data={questions}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text>{item.question}</Text>}
      />
      <Button
        title='<--'
        onPress={() => navigation.navigate('Results')}
        color='#b68973'
      />
    </View>
  );
};

export default Answers;
