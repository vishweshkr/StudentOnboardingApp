import { Component, OnInit, Input } from '@angular/core';
import {APIService} from '../AppServices/api.service';
import { Router } from '@angular/router';
import { TokenManagementService} from '../AppServices/token-management.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() username;
  isRegisterUrl= false;
  constructor(private apiservice:APIService,public router:Router,private token:TokenManagementService) { }

  ngOnInit() {
    this.username=this.token.getUsername();

    let path=window.location.pathname;

    if(!path.indexOf('students')){
      this.isRegisterUrl=true;
    }
  }

  logout(){
    
    this.apiservice.logout();
    this.router.navigateByUrl('/login');
         
        
    
  }



}
