import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeType: string;
}

const Input: React.FC<InputProps> = ({ size, ...rest }) => {
  return <Container sizeType={size} {...rest} />;
};

export default Input;
