import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeType: string;
}

const Input: React.FC<InputProps> = ({ sizeType, ...rest }) => {
  return <Container sizeType={sizeType} {...rest} />;
};

export default Input;
