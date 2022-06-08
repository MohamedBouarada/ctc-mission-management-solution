import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  elementToShow=0;

  constructor() { }

  ngOnInit(): void {
  }
  handleElementToShow(index:number) {
    this.elementToShow = index ;
  }

}
