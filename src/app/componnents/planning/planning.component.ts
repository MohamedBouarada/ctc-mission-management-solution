import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import * as arg from 'arg';
import { event } from 'src/app/models/event.model';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  @ViewChild('calendar', { static: true }) calendar!: FullCalendarComponent;
  isCalendarViewContext: boolean;
  events: event[] = [
    {
      title: 'Formation Html ',
      date: '2022-04-09',
      url: 'http://google.com/',
    },
    {
      title: 'Formation CSS ',
      date: '2022-04-16',
      url: 'http://google.com/',
    },
    {
      title: 'Formation Javascript ',
      date: '2022-04-18',
      url: 'http://google.com/',
      display: 'background',
    },
    {
      title: 'Formation Express ',
      date: '2022-04-22',
      url: 'http://google.com/',
    },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this), // bind is important!
    events: this.events,
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

  addEvent(event: event) {
    this.events.push(event);
    this.calendar.getApi().addEvent(event);
  }

  handleAddClick() {
    window.open('http://localhost:4200/AddEventForm');
    const event: event = {
      title: 'test',
      date: '2022-04-28',
      url: 'google.com',
    };
    this.addEvent(event);
  }

  swapView() {
    this.isCalendarViewContext = !this.isCalendarViewContext;
  }
}
