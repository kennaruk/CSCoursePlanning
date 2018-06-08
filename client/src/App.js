import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Header } from './components/Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer } from './components/Footer.js'
import AppLogin from './AppLogin';
import AppRegister from './AppRegister';
import AppMain from './AppMain';
import AppProfile from './AppProfile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      id: ""
    }
  }

  pushHistory = (path) => {
    this.props.history.push(path);
  }

  hasAuthenticated = (authenticated, _id) => {
    console.log('_id:', _id)
    this.setState({
      isAuthenticated: authenticated,
      id: _id
    });
  }

  render() {
    console.log('this.state.id:', this.state.id)
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      hasAuthenticated: this.hasAuthenticated
    }
    return (
      <MuiThemeProvider>
        <Header pushHistory={this.pushHistory} hasAuthenticated={this.hasAuthenticated} isAuthenticated={this.state.isAuthenticated}/>
          <Switch>
            <Route path="/profile" exact render={(props) => {return (<AppProfile {...props} hasAuthenticated={this.hasAuthenticated} id={this.state.id}/>)} }/>
            <Route path="/login" exact render={(props) => { return (<AppLogin {...props} hasAuthenticated={this.hasAuthenticated} />)}  }/>
            <Route path="/register" exact render={(props) => { return (<AppRegister {...props} hasAuthenticated={this.hasAuthenticated}/> )}  }/>
            <Route path="/" component={AppMain}/>
          </Switch>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
