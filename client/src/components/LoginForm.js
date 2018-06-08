import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBarExampleIcon } from './AppBarExampleIcon.js';
import { ButtonIcon } from './IconButton.js';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLogin: false
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


  isLogin = () => {
    this.setState({
      isLogin: true
    })
  }

  render() {
    return (
      <div class="login body">
        <div class="center">
          <div class="left-half">
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                <h4> Sign in to your account! </h4>
                <FormGroup controlId="email" bsSize="large">
                  <h6 style={{ margin: 0 }}> Username : </h6>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <h6 style={{ margin: 0 }}> Password : </h6>
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
                  onClick={this.isLogin}
                >
                  Sign in
              </Button>
              </form>
            </div>
          </div>
          <div class="right-half">
            <div class="divider"></div>
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                <h4> ไม่มีบัญชีผู้ใช้เหรอ? <a href="register"> สมัครเลย! </a> </h4>
                <p> หรือ sign in ด้วย </p>
                <MuiThemeProvider>
                  <ButtonIcon />
                </MuiThemeProvider>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
