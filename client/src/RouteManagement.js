import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import AppLogin from './AppLogin.js';
import App from './App.js';
import AppRegister from './AppRegister.js';
import AppMain from './AppMain.js';
// import { Calendar } from './Calendar.js'

class RouteManagement extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ App }/>
        <Route exact path="/login" component={ AppLogin }/>
        <Route exact path="/register" component={ AppRegister }/>
        <Route exact path="/home" component={ AppMain }/>
      </div>

    );
  }
}

export default RouteManagement;
