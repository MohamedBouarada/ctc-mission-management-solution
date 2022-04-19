import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupOrganismComponent } from './pages/signup-organism/signup-organism.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login',component:LoginComponent},
  { path: 'signup-user',component:SignupUserComponent},
  { path: 'signup-organism',component:SignupOrganismComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
