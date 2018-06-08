import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import { ProfileForm } from './components/ProfileForm.js';

// import { Calendar } from './Calendar.js'

class AppProfile extends Component {
  render() {
    return (
      <div>
        <ProfileForm />
      </div>
    );
  }
}

export default AppProfile;
