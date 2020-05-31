import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Container } from './styles';
import { useTheme } from '../../hooks/theme';

const ButtonTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [icon, setIcon] = useState(<FiSun />);

  useEffect(() => {
    setIcon(theme.title === 'light' ? <FiMoon /> : <FiSun />);
  }, [theme.title]);

  return (
    <Container type="button" onClick={toggleTheme}>
      {icon}
    </Container>
  );
};

export default ButtonTheme;
