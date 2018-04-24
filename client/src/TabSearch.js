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




class FilteredList extends React.Component {
  componentWillMount() {
    this.setState({ items: this.state.initialItems })
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
        <input type="text"  id="input" className="Input-text" placeholder="Search by course id" onChange={this.filterList} />
        {/* {console.log(this.state.items)} */}
        {console.log('props : ' + this.props.chksemester)}
        <List items={this.state.items} />
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    return (
      <div className='flow'> 
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
            this.props.items.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableRowColumn style={{ width: "4rem" }}>{item.courseId}</TableRowColumn>
                  <TableRowColumn>{item.courseName}</TableRowColumn>
                  <TableRowColumn>{item.startTime} - {item.endTime}</TableRowColumn>
                </TableRow>)
            })
          }
          {console.log(this.props.items)}
        </TableBody>
      </Table>
      </div>
    )
  }
}


export class TabSearch extends Component {
  // state = {
  //   dataSource: [],
  //   list: semester_1
  // };

  // handleUpdateInput = (value) => {
  //   this.setState({
  //     dataSource: [
  //       value.toUpperCase()
  //     ],
  //   });
  // };



  render() {
    return (

      <div>
        {/* <AutoComplete
          hintText="Type course id"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Search"
          fullWidth={true}
        /><br /> */}
        <FilteredList />
        {/* {console.log(this.state.dataSource)}
        {console.log(this.state.list)} */}
      </div>
    );
  }
}