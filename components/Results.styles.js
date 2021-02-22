import styled from 'styled-components';

export const Container = styled.View`
  background-color: #4a47a3;
  padding: 40px;
  height: 100%;
`;

export const Greeting = styled.Text`
  font-size: 54px;
  color: #fff;
  margin-top: 150px;
  line-height: 60px;
  font-family: 'Lora_400Regular';
  margin-bottom: 10px;
`;

export const ScoreText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Lora_400Regular';
`;

export const Score = styled.Text`
  font-size: 54px;
  color: #fff;
  margin-bottom: 30px;
  font-family: 'Lora_400Regular';
`;

export const ResultsButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  padding: 10px;
  width: 80%;
  align-self: center;
  margin: 8px 0;
`;

export const ResultsText = styled.Text`
  font-weight: bold;
  color: #4a47a3;
  font-size: 18px;
  padding: 10px;
`;
