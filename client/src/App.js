import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer } from './components/Footer.js'
import AppLogin from './AppLogin';
import AppRegister from './AppRegister';
import AppMain from './AppMain';
class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    }
  }

  hasAuthenticated = (authenticated) => {
    this.setState({isAuthenticated: authenticated});
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      hasAuthenticated: this.hasAuthenticated
    }
    return (
      <MuiThemeProvider>
        <Header />
          <Switch>
            <Route path="/login" exact render={(props) => { return (<AppLogin {...props} hasAuthenticated={this.hasAuthenticated} />)}  }/>
            <Route path="/register" exact render={(props) => { return (<AppRegister {...props} hasAuthenticated={this.hasAuthenticated}/> )}  }/>
            <Route path="/" render={AppMain}/>
          </Switch>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
