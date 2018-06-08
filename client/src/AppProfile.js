import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import { ProfileForm } from './components/ProfileForm.js';

// import { Calendar } from './Calendar.js'

class AppProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('AppProfile id:', this.props.id)

    return (
      <div>
        <ProfileForm {...this.props}/>
      </div>
    );
  }
}

export default AppProfile;
