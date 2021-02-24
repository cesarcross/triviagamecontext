import React from 'react';
import { ActionButton } from './Button.styles';

export const Button = ({ onPress, children }) => {
  return <ActionButton onPress={onPress}>{children}</ActionButton>;
};
