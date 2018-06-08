import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
import '../css/login.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export class ButtonIcon extends React.Component {



  render() {
    const styles = {
      button: {
        marginTop: 20,
        width: '80%'
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
    };

    return(
      <div>
      <RaisedButton
            label="Log in with Google"
            labelPosition="before"
            labelColor = "white"
            icon={<ActionAndroid />}
            style={styles.button}
            backgroundColor = "Red"

          />

    </div>
    );
  }
}
