import React from 'react'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import '../css/calendar-style.css';

import { connect } from 'react-redux'


export class Header extends React.Component {

    // Handle Drawer
    handleToggle = () => {
      this.props.handleToggle()
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Course Management"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.openDrawer}
                    onRequestChange={this.handleToggle}
                >
                    <MenuItem onClick={this.handleToggle} href="/">Home</MenuItem>
                    <MenuItem onClick={this.handleToggle} href="profile">Profile</MenuItem>
                    <MenuItem onClick={this.handleToggle} href="login">Login</MenuItem>
                    <MenuItem onClick={this.handleToggle} href="register">Register</MenuItem>
                </Drawer>

            </div >
        )
    }
}

function mapStateToProps(state) {
  return {
    openDrawer: state.openDrawer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleToggle: () => {
      dispatch({
        type: 'TOGGLE'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
