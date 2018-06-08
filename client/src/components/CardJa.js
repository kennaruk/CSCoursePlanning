import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const centerStyle = {
  margin: 'auto',
  width: '35%',
  padding: '10px'
}

const cardCenter = {
  paddingLeft: '20%',
  paddingBottom: '5%',
}

export default class CardJa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      disabled: true
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleEdit = () => {
    this.setState({
      disabled: false
    });
  }
  handleSave = () => {
    let parseObj = {
      _id: this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
    }

    fetch('/updateuser', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parseObj),
    }).then(res => res.json())
    .then(res => {
      if(res.success) {
        this.props.history.push("/");
      } else {
        alert('save err.')
      }
    })
  }
  handleDeactivate = () => {
    let deact = window.confirm("Are you sure to permanent deactivate your account?");
    if(deact) {
      fetch('/deleteuser/'+this.state.id, {
        method: 'DELETE'
      }).then(res => res.json())
      .then(res => {
        if(res.success) {
          this.props.hasAuthenticated(false);
          this.props.history.push("/");
        } else {
          alert('delete account err');
        }
      });
    }
  }

  componentDidMount() {
    console.log('testlog: /getuser/'+this.props.id);
    fetch('/getuser/'+this.props.id).then(res => res.json())
    .then(res => {
      this.setState({
        id: res.message._id,
        name: res.message.name,
        surname: res.message.surname,
        email: res.message.email,
        password: res.message.password
      })
    })
  }

  render() {
    return (
      <div style={centerStyle}>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="https://scontent.fbkk1-4.fna.fbcdn.net/v/t1.0-9/29497367_947645585399192_4070203539912130560_n.jpg?_nc_fx=fbkk1-6&_nc_cat=0&oh=16e33867fcf1f3de5b34aa0db3b844c0&oe=5BBD7954"
          />
          <CardMedia>
            <img src="https://scontent.fbkk1-4.fna.fbcdn.net/v/t1.0-9/29497367_947645585399192_4070203539912130560_n.jpg?_nc_fx=fbkk1-6&_nc_cat=0&oh=16e33867fcf1f3de5b34aa0db3b844c0&oe=5BBD7954" alt="" />
          </CardMedia>
          <CardTitle title={this.state.name} />
          <CardText>
            <FormGroup controlId="name" bsSize="large">
              <h4><span> Name: </span></h4>
              <FormControl
                autoFocus
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                disabled={this.state.disabled}
              />
            </FormGroup>
            <FormGroup controlId="surname" bsSize="large">
              <h4> Surname: </h4>
              <FormControl
                autoFocus
                type="text"
                value={this.state.surname}
                onChange={this.handleChange}
                disabled={this.state.disabled}

              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <h4> E-mail: </h4>
              <FormControl
                value={this.state.email}
                onChange={this.handleChange}
                disabled={this.state.disabled}

              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <h4> Password: </h4>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                disabled={this.state.disabled}

              />
            </FormGroup>

          </CardText>
          <CardActions style={cardCenter}>
            <RaisedButton onClick={this.handleEdit} disabled={!this.state.disabled} label="Edit" />
            <RaisedButton onClick={this.handleSave} disabled={this.state.disabled} label="Save" primary={true} />
            <RaisedButton onClick={this.handleDeactivate} label="Deactivate" secondary={true} />
          </CardActions>
        </Card>
      </div >
    )
  }
}