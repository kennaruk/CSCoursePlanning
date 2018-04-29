import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
var semester_1 = require('./semester_1.json')
var semester_2 = require('./semester_2.json')
var hover = 'true'

export class CScourse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            multiSelectable: true,
            fixedHeader: true,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showRowHover: true
        }
    }
    render() {
        const chkSemester = this.props.semester == 1 ? semester_1.map((item, i) => {
            if (item.courseId.includes("CS" + this.props.show))
                return (
                    <TableRow key={i}>
                        <TableRowColumn style={{ width: "4rem" }} >{item.courseId}</TableRowColumn>
                        <TableRowColumn>{item.courseName}</TableRowColumn>
                        <TableRowColumn>{item.startTime} - {item.endTime}</TableRowColumn>
                    </TableRow>
                )
        }) : this.props.semester == 2 ? semester_2.map((item, i) => {
            if (this.props.show == 0) {
                return null
            }
            if (item.courseId.includes("CS" + this.props.show))
                return (
                    <TableRow key={i}>
                        <TableRowColumn style={{ width: "4rem" }} >{item.courseId}</TableRowColumn>
                        <TableRowColumn>{item.courseName}</TableRowColumn>
                        <TableRowColumn>{item.startTime} - {item.endTime}</TableRowColumn>
                    </TableRow>
                )
        }) : null
        return (
            <div>
                <Table
                    fixedHeader={this.state.fixedHeader}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn style={{ width: "4rem" }}>รหัสวิชา</TableHeaderColumn>
                            <TableHeaderColumn>ชื่อวิชา</TableHeaderColumn>
                            <TableHeaderColumn>เวลาเรียน</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                    >
                        {chkSemester}
                        {console.log(this.props.semester)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}