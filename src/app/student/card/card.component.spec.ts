import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { FormDataService } from '../../core/AppServices/FormData/form-data.service'
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


const mockStudent = {
  categoryOptions : 'domestic'
}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      schemas : [NO_ERRORS_SCHEMA],
      providers:[
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigateByUrl'); }
          }, 
          {
            provide:FormDataService,
            useValue: { }
            }
      ]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = mockStudent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
