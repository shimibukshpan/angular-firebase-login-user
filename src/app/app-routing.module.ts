import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeashboardComponent } from './components/deashboard/deashboard.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},

  {path: 'deshboard', component: DeashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
