import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { APIService } from 'src/app/core/AppServices/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ILogin, Login } from 'src/app/core/models';
import { MockApiService } from 'src/app/core/AppServices/mock-api.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let mockApiService = new MockApiService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginFormComponent],
      providers:[
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigateByUrl'); }
          }, 
          {
            provide:APIService,
            useValue: mockApiService
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
