import React from 'react';
import Switch from 'react-switch';

import { useTheme } from '../../hooks/theme';

import { Container } from './styles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <h1>vuttr</h1>

      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={theme.colors.background}
        onColor={theme.colors.orange}
      />
    </Container>
  );
};

export default Header;
