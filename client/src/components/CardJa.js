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

export class CardJa extends React.Component {
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
          <CardTitle title='orn' />
          <CardText>
            <FormGroup controlId="email" bsSize="large">
              <h4><span> Name: </span></h4>
              <FormControl
                autoFocus
                type="text"
                value='a'
                onChange='a'
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <h4> Surname: </h4>
              <FormControl
                autoFocus
                type="text"
                value='surname'
                onChange='surname'
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <h4> E-mail: </h4>
              <FormControl
                value='email'
                onChange='email'
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <h4> Username: </h4>
              <FormControl
                value='username'
                onChange='username'
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <h4> Password: </h4>
              <FormControl
                value='password'
                onChange='password'
              />
            </FormGroup>

          </CardText>
          <CardActions style={cardCenter}>
            <RaisedButton label="Edit" />
            <RaisedButton label="Save" primary={true} />
            <RaisedButton label="Deactivate" secondary={true} />
          </CardActions>
        </Card>
      </div >
    )
  }
}