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
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'agendaDay,agendaWeek',
            },
            defaultView: 'agendaWeek',
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            // drop: function () {
            //     // is the "remove after drop" checkbox checked?
            //     if ($('#drop-remove').is(':checked')) {
            //         // if so, remove the element from the "Draggable Events" list
            //         $(this).remove();
            //     }
            // }
        })
    }
    render() {
        return <div id="calendar"></div>;
    }
}

