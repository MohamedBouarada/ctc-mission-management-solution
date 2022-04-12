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
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Formation Html', date: '2022-04-14' },
      { title: 'Formation CSS', date: '2022-04-15' },
      { title: 'Formation JavaScript ', date: '2022-04-22' },
      { title: 'Formation MongoDB', date: '2022-04-28' },
      { title: 'Formation express', date: '2022-05-01' },
    ],
  };
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
  constructor() {}

  ngOnInit(): void {}
}
