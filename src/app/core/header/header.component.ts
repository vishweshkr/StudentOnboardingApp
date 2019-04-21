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
  constructor(private apiservice:APIService,private router:Router,private token:TokenManagementService) { }

  ngOnInit() {
    this.username=this.token.getUsername();
  }

  logout(){
    
    this.apiservice.logout();
    this.router.navigateByUrl('/login');
         
        
    
  }



}
