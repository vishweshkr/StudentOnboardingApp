import { TestBed } from '@angular/core/testing';
import { APIService } from './api.service';
import { TokenManagementService } from './token-management.service';
import {  HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

  
describe('APIService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    schemas : [NO_ERRORS_SCHEMA],
    providers:[
      TokenManagementService  
    ]
}));


  it('should be created', () => {
    const service: APIService = TestBed.get(APIService);
    expect(service).toBeTruthy();
  });
});
