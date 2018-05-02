import React from 'react'
import './css/calendar-style.css';
import $ from 'jquery'
import fullcalendar from 'fullcalendar'
import moment from 'moment'


export class FullCalendar extends React.Component {
    render() {
        return <div>
            <Calendar /></div>;
    }
}

/*
 * A simple React component
 */
class Calendar extends React.Component {
    componentDidMount() {
        $('#calendar').fullCalendar({
            height: 750,
            events: [{
                title  : 'event2',
                start  : '2018-05-03T12:30:00',
                end    : '2018-05-03T13:30:00',
                allDay: false
              }, {
                title: 'Random Event 2',
                start: moment().add(1, 'h'),
                end: moment().add(2, 'h'),
                allDay: false
              }],
            header: {
                left: null,
                center: null,
                right: null
            },
            defaultView: 'agendaWeek',
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            minTime: "06:00:00",
            maxTime: "19:00:00",
            // drop: function () {
            //     // is the "remove after drop" checkbox checked?
            //     if ($('#drop-remove').is(':checked')) {
            //         // if so, remove the element from the "Draggable Events" list
            //         $(this).remove();
            //     }
            // }
        })
        {console.log(moment().add(-4, 'h'))}
    }
    render() {
        return <div id="calendar"></div>;
    }
}

