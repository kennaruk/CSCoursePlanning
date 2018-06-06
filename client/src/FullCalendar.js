import React from 'react'
import './css/calendar-style.css';
import $ from 'jquery'
import fullcalendar from 'fullcalendar'
import moment from 'moment'


var dayColor = ''

export class FullCalendar extends React.Component {
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
            eventBorderColor: '#FFFFFF'
        })

    }

    // add event to calendar when selected row
    componentDidUpdate() {
        var sumCredit = 0
        // check remain credit
        for (let i = 0; i < Object.keys(this.props.courses).length; i++) {
            sumCredit += this.props.courses[i].selectCredit
        }

        if (sumCredit <= 21) {
            this.props.courses.map((event, index) => {
                var findDay = 0
                event.selectDays.map((data, index) => {
                    switch (data) {
                        case 'Mon': findDay = 1; dayColor = '#ffdd05'; break;
                        case 'Tue': findDay = 2; dayColor = '#ffa0ce'; break;
                        case 'Wed': findDay = 3; dayColor = '#78a339'; break;
                        case 'Thu': findDay = 4; dayColor = '#f7a120'; break;
                        case 'Fri': findDay = 5; dayColor = '#3189d6'; break;
                        case 'Sat': findDay = 6; dayColor = '#8b1dad'; break;
                        case 'Sun': findDay = 0; dayColor = '#db291c'; break;
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
                        backgroundColor: dayColor,
                    });
                })
            })
        } else {
            alert('Maximum credit is 21')
        }
    }

    // Remove event from calendar when unselected row
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

