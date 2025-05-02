// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',    // brand blue
    },
    secondary: {
      main: '#f50057',    // accent pink
    },
    background: {
      default: '#f5f5f5', // page background
    },
  },
  typography: {
    h1: { fontSize: '2.125rem', fontWeight: 600 },
    h2: { fontSize: '1.75rem',  fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },
  // you can also customize spacing, breakpoints, etc., here
});

export default theme;
