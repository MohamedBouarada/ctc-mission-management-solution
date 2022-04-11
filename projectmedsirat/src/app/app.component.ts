import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}
