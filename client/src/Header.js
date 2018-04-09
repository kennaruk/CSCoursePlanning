import React from 'react'
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import demo from './demo.gif'
import { TabCourse } from './TabCourse.js'
import { Application } from './Application.js'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    handleChange = (event, index, value) => this.setState({ value });


    render() {
        const chk = this.state.value !== 0 ? demo : null

        return (
            <div>
                <AppBar
                    title="Course management"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
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
                        <MenuItem value={0} primaryText="ภาคเรียน" />
                        <MenuItem value={1} primaryText="ภาคเรียนที่ 1" />
                        <MenuItem value={2} primaryText="ภาคเรียนที่ 2" />

                    </DropDownMenu>
                </div>
                <div style={{ width: "45%", float: "left", margin: "10px" }}>
                    {/* <img src={chk} width="100%" /> */}
                    <Application />
                </div>
                <div style={{ width: "50%", float: "left", margin: "20px" }}>
                    <h3>Course</h3>
                    <TabCourse />
                    <br />
                </div>
            </div >
        )
    }
}