import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormationComponent } from './componnents/formation/formation.component';
import { PlanningComponent } from './componnents/planning/planning.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupOrganismComponent } from './pages/signup-organism/signup-organism.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import {TableComponent} from "./admin/users/table.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup-user', component: SignupUserComponent },
  { path: 'signup-organism', component: SignupOrganismComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'AddEventForm', component: FormationComponent },
  {path:'adminDashBoard',component:DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
