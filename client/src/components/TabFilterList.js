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

// var semester_1 = require('./semester_1.json')
// var semester_2 = require('./semester_2.json')

// var arr1 = []
// var arr2 = []
// semester_1.map((item, i) => {
//   arr1.push(item)
// })

// semester_2.map((item, i) => {
//   arr2.push(item)
// })
// var arr_merge = arr1.concat(arr2)

// Filter course
export class TabFilterList extends React.Component {
  // componentWillMount() {
  //   this.setState({
  //     items: this.state.initialItems
  //   })
  // }

  componentDidMount(){
    fetch("/getsemester1")
    .then(res => res.json())
    .then(res => {
      console.log('semester_1:', res.data)
      this.setState({
        semester_1: res.data
      }, () => { 
        fetch("/getsemester2").then(res => res.json())
        .then(res =>
          this.setState({
            semester_2: res.data
          },()=>{
            this.setState({
              initialItems: this.state.semester_1.concat(this.state.semester_2),
              items : this.state.semester_1.concat(this.state.semester_2) //from componentWillMount
            })
          })
        )
      })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      initialItems: [], // arr_merge
      items: [],
      semester_1: [],
      semester_2: [],
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
// sent state data to list (arr_merge)
  render() {
    return (
      <div className="filter-list">
        <input type="text" id="input" className="Input-text" placeholder="Search by course id" onChange={this.filterList} />
        <List items={this.state.items} onUpdateCourse={this.props.onUpdateCourse} data={this.state.initialItems} /> 
      </div>
    )
  }
}

// Show list OR show list after filter
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      multiSelectable: true,
      fixedHeader: true,
      enableSelectAll: false,
      deselectOnClickaway: false,
      showRowHover: true,
      // data: arr_merge,  // change to props.data and change all state -> props
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
        if ((this.props.data[key[i]].prerequisite.some(i => chkPrerequisite.indexOf(i) < 0))) {
          alert('required : ' + this.props.data[key[i]].prerequisite + ' !')
          this.setState({
            selectedRows: []
          })
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
              <TableHeaderColumn>รหัสวิชา</TableHeaderColumn>
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
                    <TableRowColumn>{item.courseId} </TableRowColumn>
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
