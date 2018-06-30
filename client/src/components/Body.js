import React from 'react'
import { DropDownMenu } from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { TabSearchBy } from './TabSearchBy.js'
import FullCalendar from './FullCalendar'
import { connect } from 'react-redux'

export class Body extends React.Component {

    handleYearChange = (event, index, value) => {
      this.props.handleYearChange(value)
    }

    handleSemester0 = () => {
      this.props.handleSemester0(0)
    }

    handleSemester1 = () => {
      this.props.handleSemester1(1)
    }

    handleSemester2 = () => {
      this.props.handleSemester2(2)
    }

    render() {
        return (
            <div>
                <div>
                    <DropDownMenu value={this.props.value} onChange={this.handleYearChange} >
                        <MenuItem value={0} primaryText="ชั้นปี" />
                        <MenuItem value={1} primaryText="ปี 1" />
                        <MenuItem value={2} primaryText="ปี 2" />
                        <MenuItem value={3} primaryText="ปี 3" />
                        <MenuItem value={4} primaryText="ปี 4" />
                    </DropDownMenu>
                    <DropDownMenu value={this.props.semester} >
                        <MenuItem value={0} primaryText="ภาคเรียน" onClick={this.handleSemester0} />
                        <MenuItem value={1} primaryText="ภาคเรียนที่ 1" onClick={this.handleSemester1} />
                        <MenuItem value={2} primaryText="ภาคเรียนที่ 2" onClick={this.handleSemester2} />
                    </DropDownMenu>
                </div>

                <div style={{ width: "60%", float: "left", margin: "10px" }}>
                    <h1>Time Table</h1>
                    <FullCalendar />
                </div>
                <div style={{ width: "35%", float: "left", margin: "20px" }}>
                    <TabSearchBy />
                    <br />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    value: state.value,
    semester: state.semester,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleYearChange: (value) => {
      dispatch({
        type: 'HANDLE_YEAR',
        value,
      })
    },
    handleSemester0: (semester) => {
      dispatch({
        type: 'HANDLE_SEMESTER_0',
        semester,
      })
    },
    handleSemester1: (semester) => {
      dispatch({
        type: 'HANDLE_SEMESTER_1',
        semester,
      })
    },
    handleSemester2: (semester) => {
      dispatch({
        type: 'HANDLE_SEMESTER_2',
        semester,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
