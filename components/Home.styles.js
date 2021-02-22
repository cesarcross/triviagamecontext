import styled from 'styled-components';

export const Container = styled.View`
  background-color: #4a47a3;
  padding: 40px;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 54px;
  color: #fff;
  margin-top: 200px;
  font-family: 'Lora_400Regular';
  line-height: 50px;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #fff;
  padding-right: 50px;
  font-family: 'Lora_400Regular';
  margin: 30px 0;
`;

export const StartButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  padding: 10px;
  width: 80%;
  align-self: center;
`;

export const StartText = styled.Text`
  font-weight: bold;
  color: #4a47a3;
  font-size: 18px;
  padding: 10px;
`;
