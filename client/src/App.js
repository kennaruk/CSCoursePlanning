import React, { Component } from 'react';
import './css/App.css';
import { Header } from './Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer } from './Footer.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;

