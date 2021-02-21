import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Answers = ({ score, questions, questionIndex, navigation }) => {
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
        {score} {questions.length}
      </Text>

      <Text>{questions.map((q) => q.question)}</Text>

      {/* <FlatList
        data={questions}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text>{item.question}</Text>}
      /> */}
      <Button
        title='<--'
        onPress={() => navigation.navigate('Results')}
        color='#b68973'
      />
    </View>
  );
};

export default Answers;
