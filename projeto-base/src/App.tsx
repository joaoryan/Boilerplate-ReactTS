import React from 'react';
import { Routes } from './routes/index';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
