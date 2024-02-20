import React from 'react';
import ButtonAppBar from './component-library/ButtonAppBar';
import { CssBaseline } from '@mui/material';
import MainContainer from './component-library/MainContainer';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <header>
        <ButtonAppBar />
      </header>
      <main>
        <MainContainer />
      </main>
    </>
  );
}

export default App;
