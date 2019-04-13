import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SimpleAppBar from './components/Header';
import Login from './screens/Login'
import LoginDigiD from './screens/LoginDigiD'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css'

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
          <Route path="/" exact component={Login} />
          <Route path="/id" component={Login} />
          <Route path="/scan/" component={LoginDigiD} />
          <Route path="/profile/" component={LoginDigiD} />
          <Route path="/settings/" component={LoginDigiD} />
          <NavBar/>
        </Router>
      </MuiThemeProvider>

      );
  }
}

export default App;
