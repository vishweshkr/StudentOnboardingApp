import { TestBed,async } from '@angular/core/testing';

import { FormDataService } from './form-data.service';
import { APIService } from '../api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        
        APIService
      ],
      declarations: [
        FormDataService
      ],
    }).compileComponents();
  }));


  it('should be created', () => {
    const service: FormDataService = TestBed.get(FormDataService);
    expect(service).toBeTruthy();
  });
});
