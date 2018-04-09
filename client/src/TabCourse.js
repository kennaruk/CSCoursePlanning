import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Course from './Course.js'
import { TabSearch } from './TabSearch.js'
import RaisedButton from 'material-ui/RaisedButton';
import { Cs1 } from './Cs1.js'
import { Cs2 } from './Cs2.js'
import { Cs3 } from './Cs3.js'
import { Cs4 } from './Cs4.js'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

const style_btn = {
    margin: 10
}



export class TabCourse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            showCourse: 0
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };


    handleShowCs1 = () => {
        console.log('1')
        this.setState({
            showCourse: 1
        });
    }

    handleShowCs2 = () => {
        console.log('2')
        this.setState({
            showCourse: 2
        });
    }

    handleShowCs3 = () => {
        console.log('3')
        this.setState({
            showCourse: 3
        });
    }


    handleShowCs4 = () => {
        console.log('4')
        this.setState({
            showCourse: 4
        });
    }


    render() {

        const chk = this.state.showCourse == 1 ? <Cs1 /> : this.state.showCourse == 2 ? <Cs2 /> : this.state.showCourse == 3 ? <Cs3 /> : this.state.showCourse == 4 ? <Cs4 /> : null

        return (
            <div>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="Search" value="a">
                        <div>
                            <TabSearch />
                        </div>
                    </Tab>
                    <Tab label="Course list" value="b">
                        <div>
                            <br />
                            <RaisedButton label="CS1xx" primary={true} style={style_btn} onClick={this.handleShowCs1} />
                            <RaisedButton label="CS2xx" primary={true} style={style_btn} onClick={this.handleShowCs2} />
                            <RaisedButton label="CS3xx" primary={true} style={style_btn} onClick={this.handleShowCs3} />
                            <RaisedButton label="CS4xx" primary={true} style={style_btn} onClick={this.handleShowCs4} />
                        </div>
                    </Tab>
                    {console.log(this.state.showCourse)}
                </Tabs>
                {chk}
            </div>
        );
    }
}