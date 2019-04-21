import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllComponent } from './display-all.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/core/pipes/filter/filter.pipe';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { CardComponent } from '../card/card.component';
import { ModalComponent } from '../modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('DisplayAllComponent', () => {
  let component: DisplayAllComponent;
  let fixture: ComponentFixture<DisplayAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ DisplayAllComponent, FilterPipe, SearchPipe, CardComponent, ModalComponent ],
      providers : [
        {provide: Router,
        useClass: class { navigate = jasmine.createSpy('navigateByUrl'); }
        }
        ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
