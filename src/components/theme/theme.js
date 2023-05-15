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
      main: '#04548c',
    },
    red: {
      main: '#fb1424',
    },
    txtLabel: {
      main: '#fff',
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
      main: '#000',
    },
    themeSwitcher: {
      main: '#fff',
    },
    textBtn: {
      main: '#000',
    },
    sidebar: {
      main: '#04548c',
    },
    red: {
      main: '#fb1424',
    },
    txtLabel: {
      main: '#fa0f26',
    },
    txt: {
      main: '#fff',
    },
  },
});

export { ThemeProvider };