// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline applies a global CSS reset */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
