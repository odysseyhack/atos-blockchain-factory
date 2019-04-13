import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SimpleAppBar from './components/Header';
import TxtBoxUp from './components/TxtBoxUp'
import Login from './screens/Login'
import LoginDigiD from './screens/LoginDigiD'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const appTitle = "DigiD+";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#E17000',
      },
      secondary: {
        main: '#CB6500',
      },
    },
});


class App extends Component {

  render() {

    return (

      <MuiThemeProvider theme={theme}>
        <SimpleAppBar headerTitle={appTitle}/>
        <LoginDigiD/>
        <NavBar/>
      </MuiThemeProvider>

      );
  }
}

export default App;
