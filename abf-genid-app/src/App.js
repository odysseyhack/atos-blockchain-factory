import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SimpleAppBar from './components/Header';
import TxtBoxUp from './components/TxtBoxUp'
import Login from './screens/Login'
import LoginDigiD from './screens/LoginDigiD'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <Router>
          <Route path="/id" exact component={Login} />
          <Route path="/scan/" component={LoginDigiD} />
          <Route path="/profile/" component={LoginDigiD} />
          <Route path="/help/" component={LoginDigiD} />
          <Route path="/settings/" component={LoginDigiD} />
          <LoginDigiD/>
          <NavBar/>
        </Router>
      </MuiThemeProvider>

      );
  }
}

export default App;
