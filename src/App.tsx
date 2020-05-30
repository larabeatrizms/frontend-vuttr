import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <h1>Hello VUTTR!</h1>

      <GlobalStyle />
    </Router>
  );
};

export default App;
