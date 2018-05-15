import React from 'react'
import './css/calendar-style.css';
import $ from 'jquery'
import fullcalendar from 'fullcalendar'
import moment from 'moment'


export class FullCalendar extends React.Component {

    render() {
        return (
            <div>
                <Calendar courses={this.props.courses} />
            </div>);
    }
}

class Calendar extends React.Component {
    componentDidMount() {
        $('#calendar').fullCalendar({
            // height: 750,  
            contentHeight: 'auto',
            slotLabelFormat: "HH:mm",
            allDaySlot: false,
            // footer: true,
            columnFormat: 'ddd',
            header: {
                left: null,
                center: null,
                right: null
            },
            defaultView: 'agendaWeek',
            editable: true,
            minTime: "07:00:00",
            maxTime: "19:00:00",
            eventColor: '#1fbcd3'
        })

    }

    // setState in componentDidUpdate ?
    componentDidUpdate() {
        var sumCredit = 0
        for (let i = 0; i < Object.keys(this.props.courses).length; i++) {
            sumCredit += this.props.courses[i].selectCredit
        }
        // console.log(sumCredit)
        if (sumCredit <= 21) {

            this.props.courses.map((event, index) => {
                var findDay = 0
                event.selectDays.map((data, index) => {
                    console.log(data)
                    switch (data) {
                        case 'Mon': findDay = 1; break;
                        case 'Tue': findDay = 2; break;
                        case 'Wed': findDay = 3; break;
                        case 'Thu': findDay = 4; break;
                        case 'Fri': findDay = 5; break;
                        case 'Sat': findDay = 6; break;
                        case 'Sun': findDay = 0; break;
                        default: break;
                    }
                    var day = moment().day(findDay).format('YYYY-MM-DD')
                    $('#calendar').fullCalendar('renderEvent', {
                        id: index,
                        title: event.selectCourseId,
                        start: day + 'T' + event.selectStartTime,
                        end: day + 'T' + event.selectEndTime,
                        allDay: false,
                        editable: false,
                    });
                })
            })
        } else {
            alert('Maximum credit is 21')
        }
    }

    componentWillReceiveProps() {
        this.props.courses.map((event, index) => {
            event.selectDays.map((data, index) => {
                $('#calendar').fullCalendar('removeEvents', index);
            })
        })
    }

    render() {
        return (
            <div>
                <div id="calendar"></div>
            </div>
        );
    }
}

