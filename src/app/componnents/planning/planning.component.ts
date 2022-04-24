import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import * as arg from 'arg';
import { event } from 'src/app/models/event.model';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  @ViewChild('calendar', { static: true }) calendar!: FullCalendarComponent;
  isCalendarViewContext: boolean;
 // events:

  calendarOptions: CalendarOptions = {
    headerToolbar: { center: 'dayGridMonth,timeGridWeek,timeGridDay' },
    plugins : [timeGridPlugin],
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this), // bind is important!
    events: "http://localhost:3000/courses/calendar/event",
  };

  constructor() {
    this.isCalendarViewContext = true;
  }

  ngOnInit(): void {}

  handleEventClick(arg: any) {
    arg.jsEvent.preventDefault(); // don't let the browser navigate

    alert('Event ' + arg.event.title + 'is going to open another page ');
    if (arg.event.url) {
      window.open(arg.event.url);
    }
  }

  /*
  addEvent(event: event) {
    this.events.push(event);
    this.calendar.getApi().addEvent(event);
  }

   */

  handleAddClick() {
    window.open('http://localhost:4200/AddEventForm');
    const event: event = {
      title: 'test',
      date: '2022-04-28',
      url: 'google.com',
    };
   // this.addEvent(event);
  }

  swapView() {
    this.isCalendarViewContext = !this.isCalendarViewContext;
  }
}
