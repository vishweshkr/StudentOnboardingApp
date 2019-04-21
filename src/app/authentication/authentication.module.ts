import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ LoginFormComponent, ContainerComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
