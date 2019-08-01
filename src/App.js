import React from 'react';
import MainPage from './components/pages/MainPage'
import './App.css';
import { app } from './app/AppBuilder';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
      <ThemeProvider theme={app.getTheme()}>
        <MainPage/>
      </ThemeProvider>
  );
}

export default App;
