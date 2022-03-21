import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import { LoginComponent } from './login-logout/login/login.component';
import { SignupComponent } from './login-logout/signup/signup.component';
import { LogoutComponent } from './login-logout/logout/logout.component';

import { AuthGuard } from './auth.service';

const routes: Routes = [
{path:'employee',component:EmployeeComponent, canActivate: [AuthGuard]},
{path:'department',component:DepartmentComponent, canActivate: [AuthGuard]},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'logout',component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
