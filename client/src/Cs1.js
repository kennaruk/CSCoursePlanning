import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export class Cs1 extends React.Component {
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
                        <TableRow>
                            <TableRowColumn style={{ width: "4rem" }}>CS414</TableRowColumn>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn style={{ width: "4rem" }}>CS428</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn style={{ width: "4rem" }}>CS400</TableRowColumn>
                            <TableRowColumn>Stephanie Sanders</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}