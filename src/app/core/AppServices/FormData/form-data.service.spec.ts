import { TestBed,async } from '@angular/core/testing';

import { FormDataService } from './form-data.service';
import { APIService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

describe('FormDataService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [],
      providers: [APIService]
    }).compileComponents();
  }));


  it('should be created', () => {
    const service: FormDataService = TestBed.get(FormDataService);
    expect(service).toBeTruthy();
  });
});
