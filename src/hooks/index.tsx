import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './theme';
import { ModalProvider } from './modal';
import { ToolsProvider } from './tools';

const AppProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ToolsProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToolsProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
