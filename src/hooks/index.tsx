import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './theme';

const AppProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
