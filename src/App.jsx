import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AnimatedRoutes from './routes/Routes';
import theme from './styles/Theme';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <AnimatedRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
