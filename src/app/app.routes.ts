import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [

    { path: '', redirectTo: 'Login', pathMatch: 'full' }, // Redirects the root path to 'login'
      { path: 'Login', component: LoginComponent },
      { path: 'home', component: EmployeeComponent },
];
