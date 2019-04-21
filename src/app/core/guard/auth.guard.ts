import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManagementService } from 'src/app/core/AppServices/token-management.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private tokenService:TokenManagementService,private router:Router ){

  }
  
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if(this.tokenService.isAuthenticated || this.tokenService.getToken()){
      return true;
    }
    this.router.navigateByUrl('/login')
    return false;
  }
  
}
