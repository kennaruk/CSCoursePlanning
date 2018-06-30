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
import List from './List'

// Filter course
export class TabFilterList extends React.Component {
  componentWillMount() {
    this.props.filterCourse(this.props.initialItems)
  }

  filterList = (event) => {
    var updatedList = this.props.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.courseId.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.props.filterCourse(updatedList)
  }

  render() {
    return (
      <div className="filter-list">
        <input type="text" id="input" className="Input-text" placeholder="Search by course id" onChange={this.filterList} />
        <List items={this.props.items} onUpdateCourse={this.props.onUpdateCourse} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    initialItems: state.initialItems,
    items: state.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterCourse: (items) => {
      dispatch({
        type: 'FILTER_LIST',
        items,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabFilterList)
