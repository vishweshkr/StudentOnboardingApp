import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent} from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenManagementService } from './core/AppServices/token-management.service';
import { Router } from '@angular/router';
import { APIService } from './core/AppServices/api.service';
import { MockApiService } from './core/AppServices/mock-api.service';

describe('AppComponent', () => {
  let mockApiService = new MockApiService();
  let fixture: ComponentFixture<AppComponent>;
  let app: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent 
      ],
      providers : [TokenManagementService,
        {
          provide: APIService,
          useValue: mockApiService
        },
         {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy('navigateByUrl'); }
        }, 
        ] 
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Onboarding'`, () => {
    expect(app.title).toBe('Onboarding');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Onboarding!');
  // });
});
