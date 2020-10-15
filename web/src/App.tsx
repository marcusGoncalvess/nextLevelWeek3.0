import React from 'react';

import Landing from './pages/Landing';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />

      <GlobalStyle />
    </>
  );
};

export default App;
