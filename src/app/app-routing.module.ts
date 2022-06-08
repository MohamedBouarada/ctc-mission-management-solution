import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationComponent } from './componnents/formation/formation.component';
import { DashboardAdminComponent } from './admin/dashboard/dashboard.component';
import { PlanningComponent } from './componnents/planning/planning.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupOrganismComponent } from './pages/signup-organism/signup-organism.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { SignupInstructorComponent } from './pages/signup-instructor/signup-instructor.component';
import { DashboardComponent } from './pages/dashboard-client/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup-user', component: SignupUserComponent },
  { path: 'signup-organism', component: SignupOrganismComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'AddEventForm', component: FormationComponent },
  {path:'adminDashBoard',component:DashboardAdminComponent },
  { path: 'signup-instructor', component: SignupInstructorComponent },
  { path: 'dashboard-client', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
