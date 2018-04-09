import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const Course = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>รหัสวิชา</TableHeaderColumn>
                <TableHeaderColumn>ชื่อวิชา</TableHeaderColumn>
                <TableHeaderColumn>เวลาเรียน</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableRowColumn>CS300</TableRowColumn>
                <TableRowColumn>asdpkfoka</TableRowColumn>
                <TableRowColumn>จ.13.00-16.00</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>Christopher Nolan</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
);

export default Course;