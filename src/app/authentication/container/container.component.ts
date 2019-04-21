import { Component, OnInit } from '@angular/core';
import { TokenManagementService } from 'src/app/core/AppServices/token-management.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private tokenService: TokenManagementService) { }

  ngOnInit() {
    this.tokenService.authenticate(false, '');
    
  }


}
