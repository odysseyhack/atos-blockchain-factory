import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SimpleAppBar from './components/Header';
import Login from './screens/Login'
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
    fontFamily: 'Exo+2',
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SimpleAppBar headerTitle={appTitle}/>
        <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/id/" component={Login}/>
          <Route path="/scan/" component={Login}/>
          <Route path="/profile/" component={Login}/>
          <Route path="/help/" component={Login}/>
          <Route path="/settings/" component={Login}/>
        <NavBar/>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
