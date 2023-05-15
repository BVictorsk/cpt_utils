import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    navbar: {
      main: '#fff'
    },
    tab: {
      strong: '#04548c',
      light: '#023559',
    },
    themeSwitcher: {
      main: '#04548c',
    },
    sidebar: {
      main: '#fff',
    },
    border: {
      main: '#04548c',
    },
    txt: {
      main: '#000',
      white: "#f2f2f2",
      label: '#E2E2E2AB',
      textBtn: '#fff',
    },
    copyButton: {
      main: '#04548c',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    navbar: {
      main: '#000',
    },
    tab: {
      strong: '#f90e25',
      light: '#ad0a1a',
    },
    themeSwitcher: {
      main: '#f90e25',
    },
    sidebar: {
      main: '#000',
    },
    border: {
      main: '#fb1424',
    },
    txt: {
      main: '#fff',
      white: "#f2f2f2",
      label: '#E2E2E2AB',
      textBtn: '#000',
    },
    copyButton: {
      main: '#fb1424',
    },
  },
});

export { ThemeProvider };