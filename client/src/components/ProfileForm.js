import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBarExampleIcon } from './AppBarExampleIcon.js';
import { ButtonIcon } from './IconButton.js';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { CardJa } from './CardJa.js';
export class ProfileForm extends React.Component {
  render() {
    return (
      <div>
        <CardJa />
      </div>
    );
  }
}
