import React from 'react'
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery'
import fullcalendar from 'fullcalendar'
import moment from 'moment'
import { TabCourse } from './TabCourse.js'
import { FullCalendar } from './FullCalendar.js'

import './css/calendar-style.css';

var arrSelect = []

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            semester: 0,
            test: [],
            courses: [],
        };
    }

    onUpdateCourse = (courseJSON) => {
        this.setState({
            courses: courseJSON
        }, () => {
            // console.log('header :',this.state.courses)
        });
    }

    handleChange = (event, index, value) => {
        this.setState({ value });
    }

    handleSemester0 = () => {
        this.setState({
            semester: 0
        })
    }

    handleSemester1 = () => {
        this.setState({
            semester: 1
        })
    }

    handleSemester2 = () => {
        this.setState({
            semester: 2
        })
    }

    selectRowsCourse = (i) => {
        console.log(i)


    }

    render() {
        // const chk = this.state.value !== 0 ? <div> <h1>Time Table</h1><FullCalendar selectCourselists={this.state.test} courses={this.state.courses}/> </div> : null

        return (
            <div>
                <AppBar
                    title="Course Management"
                />

                <div>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={0} primaryText="ชั้นปี" />
                        <MenuItem value={1} primaryText="ปี 1" />
                        <MenuItem value={2} primaryText="ปี 2" />
                        <MenuItem value={3} primaryText="ปี 3" />
                        <MenuItem value={4} primaryText="ปี 4" />
                    </DropDownMenu>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={0} primaryText="ภาคเรียน" onClick={this.handleSemester0} />
                        <MenuItem value={1} primaryText="ภาคเรียนที่ 1" onClick={this.handleSemester1} />
                        <MenuItem value={2} primaryText="ภาคเรียนที่ 2" onClick={this.handleSemester2} />
                    </DropDownMenu>
                </div>
                <div style={{ width: "60%", float: "left", margin: "10px" }}>
                    <h1>Time Table</h1>
                    <FullCalendar selectCourselists={this.state.test} courses={this.state.courses} />
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

