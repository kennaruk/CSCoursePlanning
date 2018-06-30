import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux'

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

// Show list OR show list after filter
export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: arr_merge,
      selectedRows: []
    }
  }

  _onRowSelection = (key) => {
    this.setState({
      selectedRows: key
    }, () => {
      let obj = [];
      let chkPrerequisite = []
      for (let i = 0; i <= key.length; i++) {
        if (i === key.length) {
          this.props.onUpdateCourse(obj)
          break;
        }

        // check prerequisite from selected row.
        if ((this.state.data[key[i]].prerequisite.some(i => chkPrerequisite.indexOf(i) < 0))) {
          alert('required : ' + this.state.data[key[i]].prerequisite + ' !')
          this.setState({
            selectedRows: []
          })
        } else {
          obj.push({
            selectCourseId: this.state.data[key[i]].courseId,
            selectStartTime: this.state.data[key[i]].startTime,
            selectEndTime: this.state.data[key[i]].endTime,
            selectDays: this.state.data[key[i]].days,
            selectCredit: this.state.data[key[i]].credit,
            selectPrerequisite: this.state.data[key[i]].prerequisite
          });
        }
        chkPrerequisite.push(this.state.data[key[i]].courseId)
        // console.log('i:',i,'obj:',obj)
      }
    });
  }


  render() {
    return (
      <div className='flow'>
        <Table
          multiSelectable={true}
          onRowSelection={this._onRowSelection}
        >
          <TableHeader enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{ width: "4rem" }}>รหัสวิชา</TableHeaderColumn>
              <TableHeaderColumn>ชื่อวิชา</TableHeaderColumn>
              <TableHeaderColumn>เวลาเรียน</TableHeaderColumn>

            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={false}
            showRowHover={true}
          >
            {
              this.props.items.map((item, i) => {
                return (
                  <TableRow key={i} selected={this.state.selectedRows.indexOf(i) !== -1}>
                    <TableRowColumn style={{ width: "4rem" }}>{item.courseId} </TableRowColumn>
                    <TableRowColumn>{item.courseName}</TableRowColumn>
                    <TableRowColumn >{item.startTime} - {item.endTime}</TableRowColumn>
                    <TableRowColumn >{item.days}</TableRowColumn>
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

function mapStateToProps(state) {
  return {
    data: state.data,
    selectedRows: state.selectedRows,
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
