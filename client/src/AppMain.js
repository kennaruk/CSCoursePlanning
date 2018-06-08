import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import { HomeBar } from './components/HomeBar.js';
import { Body } from './components/Body.js'

// import { Calendar } from './Calendar.js'

class AppMain extends Component {
  render() {
    return (
      <Body />
    );
  }
}

export default AppMain;
