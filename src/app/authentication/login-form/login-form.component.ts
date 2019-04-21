import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ILogin, Login } from 'src/app/core/models';
import { APIService } from 'src/app/core/AppServices/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
username;
  login: ILogin = new Login();
  error="";
  constructor(private apiService:APIService,private router:Router) { }

  ngOnInit() {
    this.error="";
  }

  onSubmit(){
    this.apiService.IsAuthenticated(this.login).subscribe(
      (response: ILogin[])=>{
        if(response && response.length)
        {
          this.username=(response[0].username);
    
          this.router.navigateByUrl('/students');
         
        }
        else{
          this.error="Bad login request";
          
        }
      });


  
      

    
  }
  

}
