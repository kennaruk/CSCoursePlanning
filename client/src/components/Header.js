import React from 'react'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/calendar-style.css';


export class Header extends React.Component {
    constructor(props) {
        super(props);
        // console.log('history:', this.props.pushHistory)
        this.state = {
            openDrawer: false
        };
    }

    // Handle Drawer
    handleToggle = () => this.setState({ openDrawer: true });
    handleClose = () => this.setState({ openDrawer: false });
    handleLogout = () => {
        this.handleClose();
        this.props.hasAuthenticated(false);
    }
    handleHomeClick = () => {
        this.handleClose();
        this.props.pushHistory('/');
    }
    handleBackClick = () => {
        this.handleClose();
    }
    handleLoginClick = () => {
        this.handleClose();
        this.props.pushHistory('/login');
    }
    handleRegisterClick = () => {
        this.handleClose();
        this.props.pushHistory('/register');
    }
    handleProfileClick = () => {
        this.handleClose();
        this.props.pushHistory('/profile');
    }
    handleLogoutClick = () => {
        this.handleClose();
        this.props.hasAuthenticated(false);
        this.props.pushHistory('/');
    }
    render() {
        return (
            <div>
                <AppBar
                    title="Course Management"
                    // Login BUTTON here
                    // iconElementRight={<RaisedButton label="LOGIN" />}
                    onLeftIconButtonClick={this.handleToggle}
                />

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.openDrawer}
                    onRequestChange={(open) => this.setState({ open })}
                    onClick = {() => { this.handleClose }}
                >
                    <MenuItem onClick={this.handleHomeClick}>Home</MenuItem>
                    
                    {
                        !this.props.isAuthenticated ? 
                        <div>
                            <MenuItem onClick={this.handleLoginClick}  >Login</MenuItem>
                            <MenuItem onClick={this.handleRegisterClick} >Register</MenuItem>
                        </div>
                        :
                        <div>
                            <MenuItem onClick={this.handleProfileClick} >Profile</MenuItem>
                            <MenuItem onClick={this.handleLogoutClick}  >Logout</MenuItem>
                        </div>
                    }
                    <MenuItem onClick={this.handleClose}>Close</MenuItem>
                    
                </Drawer>

            </div >
        )
    }
}
