import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
// import Dashboard from './pages/Dashboard';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />

        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

export default App;
