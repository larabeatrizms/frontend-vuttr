import React from 'react';

import ButtonTheme from '../ButtonTheme';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>vuttr</h1>

      <ButtonTheme />
    </Container>
  );
};

export default Header;
