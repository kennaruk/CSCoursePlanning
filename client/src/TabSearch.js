import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './css/TabSearch-style.css';
import $ from 'jquery'
import { FullCalendar } from './FullCalendar.js'



var semester_1 = require('./semester_1.json')
var semester_2 = require('./semester_2.json')

var arr1 = []
var arr2 = []
const s1 = semester_1.map((item, i) => {
  arr1.push(item)
})

const s2 = semester_2.map((item, i) => {
  arr2.push(item)
})
var arr_merge = arr1.concat(arr2)
// var arr_selectCouse = []



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
    // this.filterList = this.filterList.bind(this)
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
      dataTable: [],
      selectedRows: []
    }
  }

  handleCourseTime = (value) => {
    console.log(value)
  }

  _onRowSelection = (key) => {
    // console.log('a')
    // console.log('key:', key[0])
    // console.log('key:', key)
    this.setState({
      selectedRows: key
    }, () => {
      // console.log('selectedRow:', this.state.selectedRows)
      let obj = [];
      for(let i = 0 ; i <= key.length ; i++) {
        if(i === key.length) {
          // console.log('i:',i,'obj:',obj)
          this.props.onUpdateCourse(obj)
          break;
        }
        obj.push({
          // selectCouese: this.state.data[key[i]]
          selectCourseId: this.state.data[key[i]].courseId,
          selectStartTime: this.state.data[key[i]].startTime,
          selectEndTime: this.state.data[key[i]].endTime,
          selectDays: this.state.data[key[i]].days,
          indexRow: key[i]
        });
        // console.log('i:',i,'obj:',obj)
      }
      // let obj = key.map(i => {
      //   return 
      // });
      
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
        {/* <FullCalendar /> */}
      </div>
    );
  }
}