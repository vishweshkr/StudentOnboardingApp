import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module'
import { DisplayAllComponent } from './display-all/display-all.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../core/pipes/search.pipe';
import { FilterPipe } from '../core/pipes/filter/filter.pipe'
const routes: Routes = [
  {
    path:'', component:DisplayAllComponent
  }
];

@NgModule({
  declarations: [DisplayAllComponent, CardComponent, ModalComponent, SearchPipe, FilterPipe],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
