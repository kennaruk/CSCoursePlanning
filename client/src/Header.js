import React from 'react'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import './css/calendar-style.css';


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

    render() {
        return (
            <div>
                <AppBar
                    title="Course Management"
                    // Login BUTTON here
                    // iconElementRight={<RaisedButton label="Login" style={{ margin: 7 }} />}
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

