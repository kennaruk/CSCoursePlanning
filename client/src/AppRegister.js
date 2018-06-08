import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBarExampleIcon } from './components/AppBarExampleIcon.js';
import { ButtonIcon } from './components/IconButton.js';
import { RegisterForm } from './components/RegisterForm.js';
import { Footer } from './components/Footer.js';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


// import { Calendar } from './Calendar.js'

class AppRegister extends Component {

  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
export default AppRegister;
