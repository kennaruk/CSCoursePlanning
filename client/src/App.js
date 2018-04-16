import React, { Component } from 'react';
import './css/App.css';
import { Header } from './Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer } from './Footer.js'

// import { FullcalendarTest } from './FullcalendarTest.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
        {/* <Application /> */}
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;

