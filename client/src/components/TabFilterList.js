import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import '../css/TabSearch-style.css';
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

// Filter course
export class TabFilterList extends React.Component {
  componentWillMount() {
    this.setState({
      items: this.state.initialItems
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      initialItems: arr_merge,
      items: [],
    }
  }

  filterList = (event) => {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.courseId.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      items: updatedList,
    });
  }

  render() {
    return (
      <div className="filter-list">
        <input type="text" id="input" className="Input-text" placeholder="Search by course id" onChange={this.filterList} />
        <List items={this.state.items} onUpdateCourse={this.props.onUpdateCourse} />
      </div>
    )
  }
}

// Show list OR show list after filter
class List extends React.Component {
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
    initialItems: state.initialItems,
    items: state.items,
    data: state.data,
    selectedRows: state.selectedRows,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    a: () => {
      dispatch({
        type: '1'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabFilterList)
