import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this), // bind is important!
    events: [
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
    ],
  };

  handleEventClick(arg: any) {
    arg.jsEvent.preventDefault(); // don't let the browser navigate

    alert('Event ' + arg.event.title + 'is going to open another page ');
    if (arg.event.url) {
      window.open(arg.event.url);
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
