import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    navbar: {
      main: '#fff'
    },
    themeSwitcher: {
      main: '#000',
    },
    textBtn: {
      main: '#fff',
    },
    sidebar: {
      main: '#0c5993',
    },
    red: {
      main: '#ad0a1a',
    },
    txtLabel: {
      main: '#fff',
    },
    txtInput: {
      main: '#000',
    },
    txt: {
      main: '#000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    navbar: {
      main: '#303030',
    },
    themeSwitcher: {
      main: '#fff',
    },
    textBtn: {
      main: '#000',
    },
    sidebar: {
      main: '#052a46',
    },
    red: {
      main: '#fa0f26',
    },
    txtLabel: {
      main: '#fa0f26',
    },
    txtInput: {
      main: '#000',
    },
    txt: {
      main: '#fff',
    },
  },
});

export { ThemeProvider };
// 0c5993