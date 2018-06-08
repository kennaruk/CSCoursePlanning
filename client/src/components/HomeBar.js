import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const recentsIcon = <FontIcon className="material-icons">FUEN</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export class HomeBar extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    const styles = {
      button: {
        marginBottom: 20,
      }
    }
    return (
      <div>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={0} primaryText="ชั้นปี" />
              <MenuItem value={1} primaryText="ปี 1" />
              <MenuItem value={2} primaryText="ปี 2" />
              <MenuItem value={3} primaryText="ปี 3" />
              <MenuItem value={4} primaryText="ปี 4" />
          </DropDownMenu>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={0} primaryText="ภาคเรียน" />
              <MenuItem value={1} primaryText="ภาคเรียนที่ 1" />
              <MenuItem value={2} primaryText="ภาคเรียนที่ 2" />
          </DropDownMenu>
      </div>
    );
  }
}
