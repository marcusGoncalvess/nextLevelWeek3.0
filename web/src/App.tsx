import React from 'react';

import Landing from './pages/Landing';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Landing />

      <GlobalStyle />
    </>
  );
};

export default App;
