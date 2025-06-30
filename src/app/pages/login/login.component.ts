import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAPIService } from '../../core/services/user-api.service';
import { Router, RouterLink } from '@angular/router';
import { UserLogin } from '../../core/models/class/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userService=inject(UserAPIService);
  router=inject(Router);


  loginObj:UserLogin= new UserLogin();


  onLogin(){
    this.userService.onLogin(this.loginObj).subscribe({
      next:(respose:any)=>{
        debugger;
        this.router.navigateByUrl("/client-list");
      },
      error:(error:any)=>{

      }

    })
  }
}
