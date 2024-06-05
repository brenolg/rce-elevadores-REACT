import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AnimatedRoutes from './routes/Routes';
import theme from './styles/Theme';
import Header from './components/Header';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <WhatsApp />
        <AnimatedRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
