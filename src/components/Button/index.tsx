import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  size: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...rest
}) => {
  return (
    <Container type="button" variant={variant} size={size} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
