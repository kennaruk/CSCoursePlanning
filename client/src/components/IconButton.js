import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import '../css/login.css';
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
