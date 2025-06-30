import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ClientListComponent } from './pages/client/client-list/client-list.component';

export const routes: Routes = [

    { path: '', redirectTo: 'Login', pathMatch: 'full' }, // Redirects the root path to 'login'
      { path: 'Login', component: LoginComponent },
      {
        path:'',
        component:LayoutComponent,
        children:[
            {
              path:"client-list",
              component:ClientListComponent
            }
        ]
      },
      { path: 'home', component: EmployeeComponent },
];
