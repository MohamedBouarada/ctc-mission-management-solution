import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgZoroModule } from '../../ng-zoro.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
//import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EnrolledCoursesComponent } from '../../componnents/enrolled-courses/enrolled-courses.component';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    DashboardComponent,
      // TableComponent
      EnrolledCoursesComponent,
      ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    NgZoroModule,
    NzLayoutModule,
    NzTableModule,
    NzDatePickerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NzMenuModule,
    MatFormFieldModule,

  ]
})
export class DashboardClientModule { }






