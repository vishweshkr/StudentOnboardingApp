import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentRegistrationRoutingModule } from './student-registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path:'', component:RegistrationFormComponent
  }
];

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    StudentRegistrationRoutingModule,
    ReactiveFormsModule
    
  ]

})
export class StudentRegistrationModule { }
