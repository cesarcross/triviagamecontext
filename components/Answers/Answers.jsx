import React, { useContext } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TriviaContext } from '../../contexts/TriviaContext.jsx';
import {
  Container,
  ReturnText,
  Score,
  Title,
  AnswersItem,
} from './Answers.styles.js';

const Answers = ({ navigation }) => {
  const { score, questions } = useContext(TriviaContext);

  const totalCorrectAnswers = score.correctAnswers.flatMap((correctAnswerId) =>
    questions
      .filter((question) => question.key === correctAnswerId)
      .map((question) => {
        question.icon = '✓';
        return question;
      })
  );

  const totalWrongAnswers = score.wrongAnswers.flatMap((wrongAnswerId) =>
    questions
      .filter((question) => question.key === wrongAnswerId)
      .map((question) => {
        question.icon = '✗';
        return question;
      })
  );

  const checkAnswers = totalCorrectAnswers.concat(totalWrongAnswers);

  return (
    <SafeAreaView>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}>
          <ReturnText>⇐</ReturnText>
        </TouchableOpacity>
        <Title>Answers</Title>
        <Score>
          {score.points}/{questions.length}
        </Score>
        <FlatList
          data={checkAnswers}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <AnswersItem>{`${item.icon} ${item.question}`}</AnswersItem>
          )}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Answers;
