import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  constructor(private httpclient:HttpClient) 
   {

   }

   onLogin(obj:any){
    return this.httpclient.post("https://freeapi.miniprojectideas.com/api/ClientStrive/Login",obj);
   }
}
