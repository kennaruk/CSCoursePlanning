import React, { Component } from 'react';
import './css/App.css';
import { Header } from './Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer } from './Footer.js'

const footer_styles = {
  headline: {
    position: "fixed",
    left: '0',
    bottom: '0',
    width: '100%'
  },
};

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

