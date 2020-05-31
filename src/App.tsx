import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';

import { ThemeProvider } from './hooks/theme';

import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppProvider>
          <Dashboard />

          <GlobalStyle />
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
