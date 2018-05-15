import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './css/TabSearch-style.css';

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


class FilteredList extends React.Component {
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

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      multiSelectable: true,
      fixedHeader: true,
      enableSelectAll: false,
      deselectOnClickaway: false,
      showRowHover: true,
      data: arr_merge,
      selectedRows: []
    }
  }

  _onRowSelection = (key) => {
    console.log('key', key.length)
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
          // selectCouese: this.state.data[key[i]]
          selectCourseId: this.state.data[key[i]].courseId,
          selectStartTime: this.state.data[key[i]].startTime,
          selectEndTime: this.state.data[key[i]].endTime,
          selectDays: this.state.data[key[i]].days,
          selectCredit: this.state.data[key[i]].credit,
          // selected: key.select,
          // indexRow: key[i]
        });
        // console.log(obj)
        // console.log('i:',i,'obj:',obj)
      }
    });
  }


  render() {
    return (
      <div className='flow'>
        <Table
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
            {
              this.props.items.map((item, i) => {
                return (
                  <TableRow key={i} selected={this.state.selectedRows.indexOf(i) !== -1}>
                    <TableRowColumn style={{ width: "4rem" }}>{item.courseId}</TableRowColumn>
                    <TableRowColumn>{item.courseName}</TableRowColumn>
                    <TableRowColumn >{item.startTime} - {item.endTime}</TableRowColumn>
                    {/* {console.log(this.state.data)} */}
                  </TableRow>
                )
              })
            }
            {/* {console.log(this.props.items)} */}
          </TableBody>
        </Table>
      </div>
    )
  }
}


export class TabSearch extends Component {
  render() {
    return (
      <div>
        <FilteredList onUpdateCourse={this.props.onUpdateCourse} />
      </div>
    );
  }
}