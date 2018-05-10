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
            footer: true,
            columnFormat: 'ddd',
            header: {
                left: null,
                center: null,
                right: null
            },
            defaultView: 'agendaWeek',
            editable: true,
            minTime: "08:00:00",
            maxTime: "19:00:00",

            // drop: function () {
            //     // is the "remove after drop" checkbox checked?
            //     if ($('#drop-remove').is(':checked')) {
            //         // if so, remove the element from the "Draggable Events" list
            //         $(this).remove();
            //     }
            // }
        })
    }


    componentDidUpdate() {
        this.props.courses.map((event, index) => {
            $('#calendar').fullCalendar('renderEvent', {
                id: index,
                title: event.selectCourseId,
                start: '2018-05-06T' + event.selectStartTime,
                end: '2018-05-06T' + event.selectEndTime,
                allDay: false,
                editable: false
            });

        })
    }

    componentWillReceiveProps() {
        this.props.courses.map((event, index) => {
            $('#calendar').fullCalendar('removeEvents', index);
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

