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
        password: "",
        name: "",
        surname: ""
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
      const parseObj = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        surname: this.state.surname
      }

      fetch('/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parseObj),
      }).then(res => res.json())
      .then(res => {
        if(res.success) {
          this.props.history.push('/login');
        } else { 
          alert('สมัครไม่สำเร็จ')
        }
      })
    }
  render() {
    return(
      <div class="login body">
        <div class="center">

          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <h4> สมัครสมาชิกเลยเด็กๆ </h4>
              <FormGroup controlId="name" bsSize="large">
                <h6> Name: </h6>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="surname" bsSize="large">
                <h6> Surname: </h6>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.surname}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="email" bsSize="large">
                <h6 style={{ margin: 0 }}> E-mail: </h6>
                <FormControl
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="text"
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <h6> Password: </h6>
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
