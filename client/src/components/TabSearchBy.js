import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { TabCourseList } from './TabCourseList.js'
import TabFilterList from './TabFilterList';

export class TabSearchBy extends React.Component {

    render() {
        // const isShowCourseList = this.state.showCourse === 0 ? null : <TabCourseList show={this.state.showCourse} semester={this.props.semester} onUpdateCourse={this.props.onUpdateCourse} />
        return (
            <div>
                <Tabs>
                    <Tab label="Search" value="a" disabled >
                        <div>
                            <TabFilterList chksemester={this.props.semester} onUpdateCourse={this.props.onUpdateCourse} />
                        </div>
                    </Tab>
                    {/* <Tab label="Course list" value="b" disabled >
                        <div style={{ width: '100%' }}>
                            <br />
                            <RaisedButton label="CS1xx" primary={true} style={style_btn} onClick={this.handleShowCs1} />
                            <RaisedButton label="CS2xx" primary={true} style={style_btn} onClick={this.handleShowCs2} />
                            <RaisedButton label="CS3xx" primary={true} style={style_btn} onClick={this.handleShowCs3} />
                            <RaisedButton label="CS4xx" primary={true} style={style_btn} onClick={this.handleShowCs4} />
                        </div>
                    </Tab> */}
                </Tabs>
            </div>
        );
    }
}
