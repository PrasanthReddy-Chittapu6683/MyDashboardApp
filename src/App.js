
import React from 'react'
import './App.css';
import Dashboard from './Dashboard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './CommonStylings';







function App() {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div >
      <header>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
