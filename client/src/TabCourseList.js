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

var arr1 = []
var arr2 = []
semester_1.map((item, i) => {
    arr1.push(item)
})

semester_2.map((item, i) => {
    arr2.push(item)
})
var arr_merge = arr1.concat(arr2)


export class TabCourseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            multiSelectable: true,
            fixedHeader: true,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showRowHover: true,
            selectedRows: [],
            data: arr_merge,

        }
    }

    _onRowSelection = (key) => {
        this.setState({
          selectedRows: key
        }, () => {
          let obj = [];
          for (let i = 0; i <= key.length; i++) {
            if (i === key.length) {
              this.props.onUpdateCourse(obj)
              break;
            }
            obj.push({
              selectCourseId: this.state.data[key[i]].courseId,
              selectStartTime: this.state.data[key[i]].startTime,
              selectEndTime: this.state.data[key[i]].endTime,
              selectDays: this.state.data[key[i]].days,
              selectCredit: this.state.data[key[i]].credit,
            });
            // console.log('i:',i,'obj:',obj)
          }
        });
      }

    render() {
        // chkSemester: check semester 1 or semester 1 for show course in that semester
        const chkSemester = this.props.semester === 1 ? semester_1.map((item, i) => {
            if (item.courseId.includes("CS" + this.props.show))
                return (
                    <TableRow key={i} selected={this.state.selectedRows.indexOf(i) !== -1}>
                        <TableRowColumn style={{ width: "4rem" }} >{item.courseId}</TableRowColumn>
                        <TableRowColumn>{item.courseName}</TableRowColumn>
                        <TableRowColumn>{item.startTime} - {item.endTime}</TableRowColumn>
                    </TableRow>
                )
        }) : this.props.semester === 2 ? semester_2.map((item, i) => {
            if (this.props.show === 0) {
                return null
            }
            if (item.courseId.includes("CS" + this.props.show))
                return (
                    <TableRow key={i} selected={this.state.selectedRows.indexOf(i) !== -1}>
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
                    onRowSelection={this._onRowSelection}
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

                    </TableBody>
                </Table>
            </div>
        )
    }
}