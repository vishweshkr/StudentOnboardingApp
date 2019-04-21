import { TestBed, inject } from '@angular/core/testing';

import { TokenManagementService } from './token-management.service';

describe('TokenManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {

    const service: TokenManagementService = TestBed.get(TokenManagementService);
    expect(service).toBeTruthy();
  });


  it('should authenticate true', inject([TokenManagementService], (service: TokenManagementService) => {
    service.authenticate(true,'');
    expect(service.isAuthenticated).toBeTruthy();
  }));
  
  it('should un-authenticate', inject([TokenManagementService], (service: TokenManagementService) => {
    service.authenticate(false,'');
    expect(service.isAuthenticated).toBeFalsy();
  })); 
   
  it('get Token', inject([TokenManagementService], (service: TokenManagementService) => {
    expect(service.getToken()).toBeFalsy();
  })); 


    
});
