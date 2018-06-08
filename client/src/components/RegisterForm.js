import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBarExampleIcon } from './AppBarExampleIcon.js';
import { ButtonIcon } from './IconButton.js';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export class RegisterForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: ""
      };
    }

    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();
    }
  render() {
    return(
      <div class="login body">
        <div class="center">

          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <h4> สมัครสมาชิกเลยเด็กๆ </h4>
              <FormGroup controlId="email" bsSize="large">
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>

              <Button bsStyle="success"
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}
