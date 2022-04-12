import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AppComponent } from './app.component';
import { PlanningComponent } from './componnents/planning/planning.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [AppComponent, PlanningComponent],
  imports: [
    BrowserModule,
    FullCalendarModule, // register FullCalendar with you app
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
