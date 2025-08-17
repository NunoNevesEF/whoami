import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#fff' },
    text: { primary: '#000' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212' },
    text: { primary: '#fff' },
  },
});