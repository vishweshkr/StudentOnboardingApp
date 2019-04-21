import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';



import { RouterTestingModule } from '@angular/router/testing';


// describe('AuthGuard', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [AuthGuard]
//     });
//   });


  describe('AuthGuard', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
        
        ],
        providers: [AuthGuard]
      }).compileComponents();
    }));

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

 