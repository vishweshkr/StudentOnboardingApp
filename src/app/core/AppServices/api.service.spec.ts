import { TestBed } from '@angular/core/testing';
import { APIService } from './api.service';
import { TokenManagementService } from './token-management.service';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { map } from 'rxjs/operators';
  
fdescribe('APIService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[
      Injectable,
      Observable,
      map,
      APIService
    ],
    schemas : [NO_ERRORS_SCHEMA],
   
    providers:[
      
      
      HttpClient,
TokenManagementService
        
    ]


    
  }));


  it('should be created', () => {
    const service: APIService = TestBed.get(APIService);
    expect(service).toBeTruthy();
  });
});
