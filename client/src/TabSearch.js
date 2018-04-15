import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export class TabSearch extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type course id"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Search"
          fullWidth={true}
        />
      </div>
    );
  }
}