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

// Show list OR show list after filter
export class List extends React.Component {

  _onRowSelection = (key) => {
    this.props.onRowSelection(key)
    let obj = [];
    let chkPrerequisite = []
    for (let i = 0; i <= key.length; i++) {
      if (i === key.length) {
        this.props.onUpdateCourse(obj)
        break;
      }
      // check prerequisite from selected row.
      if ((this.props.data[key[i]].prerequisite.some(i => chkPrerequisite.indexOf(i) < 0))) {
        alert('required : ' + this.props.data[key[i]].prerequisite + ' !')
      } else {
        obj.push({
          selectCourseId: this.props.data[key[i]].courseId,
          selectStartTime: this.props.data[key[i]].startTime,
          selectEndTime: this.props.data[key[i]].endTime,
          selectDays: this.props.data[key[i]].days,
          selectCredit: this.props.data[key[i]].credit,
          selectPrerequisite: this.props.data[key[i]].prerequisite
        });
      }
      chkPrerequisite.push(this.props.data[key[i]].courseId)
      // console.log('i:',i,'obj:',obj)
    }
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
                  <TableRow key={i} selected={this.props.selectedRows.indexOf(i) !== -1}>
                    <TableRowColumn style={{ width: "4rem" }}>{item.courseId} </TableRowColumn>
                    <TableRowColumn>{item.courseName}</TableRowColumn>
                    <TableRowColumn>{item.startTime} - {item.endTime}</TableRowColumn>
                    <TableRowColumn>{item.days}</TableRowColumn>
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
    items: state.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRowSelection: (selectedRows) => {
      dispatch({
        type: 'SELECT_ROWS',
        selectedRows,
      })
    },
    onUpdateCourse: (courses) => {
      dispatch({
        type: 'UPDATE_COURSE',
        courses,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
