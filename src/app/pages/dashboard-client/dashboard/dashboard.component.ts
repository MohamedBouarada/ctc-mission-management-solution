import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isEnrolledCoursesViewContext: boolean;
  isProfileViewContext: boolean;
  isPlanningViewContext: boolean;
  index=0;


  constructor() {
    this.isEnrolledCoursesViewContext = true;
    this.isPlanningViewContext=false;
    this.isProfileViewContext=false;
   }

  ngOnInit(): void {
  }
  swapView(i:number) {
    this.index=i;
  }
  swapViewToPlanningPage() {
    this.isEnrolledCoursesViewContext = false;
    this.isPlanningViewContext=true;
    this.isProfileViewContext=false;
  }
  swapViewToEnrolledCoursesPage() {
    this.isEnrolledCoursesViewContext = true;
    this.isPlanningViewContext=false;
    this.isProfileViewContext=false;
  }

}
