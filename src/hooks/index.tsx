import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './theme';
import { ModalProvider } from './modal';

const AppProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
