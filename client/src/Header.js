import React from 'react'
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { TabCourse } from './TabCourse.js'
import { FullCalendar } from './FullCalendar.js'
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';


import './css/calendar-style.css';


export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            semester: 0,
            courses: [],
            openDrawer: false
        };
    }

    onUpdateCourse = (courseJSON) => {
        this.setState({
            courses: courseJSON
        }, () => {
            // console.log('header :',this.state.courses)
        });
    }

    handleYearChange = (event, index, value) => this.setState({ value: value });

    handleSemester0 = () => this.setState({ semester: 0 })

    handleSemester1 = () => this.setState({ semester: 1 })

    handleSemester2 = () => this.setState({ semester: 2 })

    // Handle Drawer 
    handleToggle = () => this.setState({ openDrawer: true });
    handleClose = () => this.setState({ openDrawer: false });

    render() {
        // const chk = this.state.value !== 0 ? <div> <h1>Time Table</h1><FullCalendar selectCourselists={this.state.test} courses={this.state.courses}/> </div> : null

        return (
            <div>
                <AppBar
                    title="Course Management"
                    iconElementRight={<RaisedButton label="Login" style={{ margin: 7 }} />}
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

                <div>
                    <DropDownMenu value={this.state.value} onChange={this.handleYearChange} >
                        <MenuItem value={0} primaryText="ชั้นปี" />
                        <MenuItem value={1} primaryText="ปี 1" />
                        <MenuItem value={2} primaryText="ปี 2" />
                        <MenuItem value={3} primaryText="ปี 3" />
                        <MenuItem value={4} primaryText="ปี 4" />
                    </DropDownMenu>
                    <DropDownMenu value={this.state.semester}>
                        <MenuItem value={0} primaryText="ภาคเรียน" onClick={this.handleSemester0} />
                        <MenuItem value={1} primaryText="ภาคเรียนที่ 1" onClick={this.handleSemester1} />
                        <MenuItem value={2} primaryText="ภาคเรียนที่ 2" onClick={this.handleSemester2} />
                    </DropDownMenu>
                </div>
                <div style={{ width: "60%", float: "left", margin: "10px" }}>
                    <h1>Time Table</h1>
                    <FullCalendar courses={this.state.courses} />
                    {/* {chk} */}
                </div>
                <div style={{ width: "35%", float: "left", margin: "20px" }}>
                    {/* <h3>Course</h3> */}
                    <TabCourse semester={this.state.semester} onUpdateCourse={this.onUpdateCourse} />
                    <br />
                </div>
            </div >
        )
    }
}

