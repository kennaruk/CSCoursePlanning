import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { TabCourseList } from './TabCourseList.js'
import { TabFilterList } from './TabFilterList.js';

const style_btn = {
    margin: 10,
    width: '20%'
}

export class TabSearchBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCourse: 0,
        }
    }

    handleShowCs1 = () => this.setState({ showCourse: 1 })

    handleShowCs2 = () => this.setState({ showCourse: 2 })

    handleShowCs3 = () => this.setState({ showCourse: 3 })

    handleShowCs4 = () => this.setState({ showCourse: 4 })

    toggleSearch = () => {
        this.setState({
            showCourse: 0
        })
    }

    render() {
        const isShowCourseList = this.state.showCourse === 0 ? null : <TabCourseList show={this.state.showCourse} semester={this.props.semester} onUpdateCourse={this.props.onUpdateCourse} />

        return (
            <div>
                <Tabs>
                    <Tab label="Search" value="a" onActive={this.toggleSearch} disabled>
                        <div>
                            <TabFilterList chksemester={this.props.semester} onUpdateCourse={this.props.onUpdateCourse} />
                        </div>
                    </Tab>
                    <Tab label="Course list" value="b" disabled>
                        <div style={{ width: '100%' }}>
                            <br />
                            <RaisedButton label="CS1xx" primary={true} style={style_btn} onClick={this.handleShowCs1} />
                            <RaisedButton label="CS2xx" primary={true} style={style_btn} onClick={this.handleShowCs2} />
                            <RaisedButton label="CS3xx" primary={true} style={style_btn} onClick={this.handleShowCs3} />
                            <RaisedButton label="CS4xx" primary={true} style={style_btn} onClick={this.handleShowCs4} />
                        </div>
                    </Tab>
                </Tabs>

                {isShowCourseList}

            </div>
        );
    }
}