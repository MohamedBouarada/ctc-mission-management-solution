import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgZoroModule } from '../ng-zoro.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TableComponent } from './users/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstructorsComponent } from './instructors/instructors.component';
import { OrganismsComponent } from './organisms/organisms.component';





@NgModule({
  declarations: [

    DashboardComponent,
    TableComponent,
    InstructorsComponent,
    OrganismsComponent,

  ],
  imports: [
    CommonModule,
    NgZoroModule,
    NzLayoutModule,
    NzTableModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
