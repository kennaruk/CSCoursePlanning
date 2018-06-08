import React from 'react'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/calendar-style.css';


export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false
        };
    }

    // Handle Drawer
    handleToggle = () => this.setState({ openDrawer: true });
    handleClose = () => this.setState({ openDrawer: false });
    handleLogout = () => {
        this.props.hasAuthenticated(false);
    }


    render() {
        const LoginButtonPanel = this.props.isAuthenticated ?
            <button style={{ margin: 7 }} href="login" onClick={this.a} > login </button>
            :
            <button style={{ margin: 7 }} href="/" onClick={this.a}> logout </button>

        return (
            <div>
                <AppBar
                    title="Course Management"
                    // Login BUTTON here
                    iconElementRight={<RaisedButton label="LOGIN" />}
                    onLeftIconButtonClick={this.handleToggle}
                />

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.openDrawer}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MenuItem onClick={this.handleClose}>Back</MenuItem>
                    <MenuItem onClick={this.handleClose}>About me</MenuItem>
                </Drawer>

            </div >
        )
    }
}
