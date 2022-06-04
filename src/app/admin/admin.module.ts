import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgZoroModule } from '../ng-zoro.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';





@NgModule({
  declarations: [
  
    DashboardComponent,
       TableComponent
  ],
  imports: [
    CommonModule,
    NgZoroModule,
    NzLayoutModule,
    NzTableModule
  ]
})
export class AdminModule { }
