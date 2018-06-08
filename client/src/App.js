import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer } from './components/Footer.js'
import AppLogin from './AppLogin';
import AppRegister from './AppRegister';
import AppMain from './AppMain';
import AppProfile from './AppProfile';
class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      _id: ""
    }
  }

  hasAuthenticated = (authenticated, _id) => {
    if(authenticated) {
      this.setState({_id: _id});
    } 
    this.setState({isAuthenticated: authenticated});
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      hasAuthenticated: this.hasAuthenticated
    }
    return (
      <MuiThemeProvider>
        <Header isAuthenticated={this.state.isAuthenticated}/>
          <Switch>
            <Route path="/login" exact render={(props) => { return (<AppLogin {...props} hasAuthenticated={this.hasAuthenticated} />)}  }/>
            <Route path="/register" exact render={(props) => { return (<AppRegister {...props} hasAuthenticated={this.hasAuthenticated}/> )}  }/>
            <Route path="/" component={AppMain}/>
          </Switch>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
