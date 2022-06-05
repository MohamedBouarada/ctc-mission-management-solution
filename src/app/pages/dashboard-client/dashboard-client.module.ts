import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgZoroModule } from '../../ng-zoro.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
//import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EnrolledCoursesComponent } from '../../componnents/enrolled-courses/enrolled-courses.component';



@NgModule({
  declarations: [
    DashboardComponent,
      // TableComponent
      EnrolledCoursesComponent
  ],
  imports: [
    CommonModule,
    NgZoroModule,
    NzLayoutModule,
    NzTableModule
  ]
})
export class DashboardClientModule { }






