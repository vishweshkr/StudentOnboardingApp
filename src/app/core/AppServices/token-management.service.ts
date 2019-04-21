import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenManagementService {
  isAuthenticated:boolean;
  isUserAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  getToken(){
    return window.localStorage.getItem('token');
  }

  getUsername(){
    return window.localStorage.getItem('username');
  }

  private setToken(username:string){
    if(!this.getToken()){
     
      window.localStorage.setItem('token','efe-efe-df-df-df-gr');
      window.localStorage.setItem('username',username);

    }
  }

  authenticate(value:boolean,username: string){
    this.isAuthenticated=value;

    if(value){
      this.setToken(username);
    }
    else
      {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
    }
    this.isUserAuthenticated.next(value);
  }

  checkAuthentication(){
    const token = window.localStorage.getItem('token');
    this.isUserAuthenticated.next(this.isAuthenticated || (token && token!= ''));
  }


  
}
