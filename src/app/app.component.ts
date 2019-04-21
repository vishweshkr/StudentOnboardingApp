import { Component } from '@angular/core';
import {TokenManagementService} from './core/AppServices/token-management.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Onboarding';
  isAuth=false;
  
  constructor(private service:TokenManagementService){
    

  }
  ngOnInit(){
    // console.log(this.isNotAuth );
    this.service.checkAuthentication();
    this.service.isUserAuthenticated.subscribe((auth) => {
      this.isAuth = auth;
    });
    // if(this.service.getToken() || this.service.getToken() ==="")
    // this.isNotAuth=true;
    // console.log(this.isNotAuth );
  }
}

