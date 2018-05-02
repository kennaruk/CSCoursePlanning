import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Course from './Course.js'
import { TabSearch } from './TabSearch.js'
import RaisedButton from 'material-ui/RaisedButton';
import { CScourse } from './CScourse.js'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

const style_btn = {
    margin: 10,
    width: '20%'
}



export class TabCourse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            showCourse: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };


    handleShowCs1 = () => {
        // console.log('1')
        this.setState({
            showCourse: 1
        });
    }

    handleShowCs2 = () => {
        // console.log('2')
        this.setState({
            showCourse: 2
        });
    }

    handleShowCs3 = () => {
        // console.log('3')
        this.setState({
            showCourse: 3
        });
    }


    handleShowCs4 = () => {
        // console.log('4')
        this.setState({
            showCourse: 4
        });
    }

    toggleSearch = () => {
        this.setState({
            showCourse: 0
        })
    }

    // test = (i) => {
    //     console.log(i)
    // }


    render() {

        const chk = this.state.showCourse === 0 ? null : <CScourse show={this.state.showCourse} semester={this.props.semester}/>
        return (
            <div>
                <Tabs
                // value={this.state.value}
                // onChange={this.handleChange}
                >
                    <Tab label="Search" value="a" onActive={this.toggleSearch}>
                        <div>
                            <TabSearch chksemester={this.props.semester} selectRowsCourse={this.props.selectRowsCourse}/>
                            {/* {console.log('tab couse props ' + this.props.semester)} */}
                        </div>
                    </Tab>
                    <Tab label="Course list" value="b" >
                        <div style={{width:'100%'}}>
                            <br />
                            <RaisedButton label="CS1xx" primary={true} style={style_btn} onClick={this.handleShowCs1} />
                            <RaisedButton label="CS2xx" primary={true} style={style_btn} onClick={this.handleShowCs2} />
                            <RaisedButton label="CS3xx" primary={true} style={style_btn} onClick={this.handleShowCs3} />
                            <RaisedButton label="CS4xx" primary={true} style={style_btn} onClick={this.handleShowCs4} />
                        </div>
                    </Tab>
                </Tabs>
                {chk}
                
            </div>
        );
    }
}