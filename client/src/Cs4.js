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

export class Cs4 extends React.Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn style={{ width: "4rem" }}>รหัสวิชา</TableHeaderColumn>
                            <TableHeaderColumn>ชื่อวิชา</TableHeaderColumn>
                            <TableHeaderColumn>เวลาเรียน</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            semester_1.map((item, i) => {
                                if (item.courseId.includes("CS4"))
                                    return (
                                        <TableRow key={i}>
                                            <TableRowColumn style={{ width: "4rem" }} >{item.courseId}</TableRowColumn>
                                            <TableRowColumn>{item.courseName}</TableRowColumn>
                                            <TableRowColumn>{item.startTime} - {item.endTime}</TableRowColumn>
                                        </TableRow>
                                    )
                            })

                        }
                        {
                            semester_2.map((item, i) => {
                                if (item.courseId.includes("CS4"))
                                    return (
                                        <TableRow key={i}>
                                            <TableRowColumn style={{ width: "4rem" }} >{item.courseId}</TableRowColumn>
                                            <TableRowColumn>{item.courseName}</TableRowColumn>
                                            <TableRowColumn>{item.startTime} - {item.endTime}</TableRowColumn>
                                        </TableRow>
                                    )
                            })
                        }


                    </TableBody>
                </Table>
            </div>
        )
    }
}