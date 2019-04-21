import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path:'login', loadChildren:'./authentication/authentication.module#AuthenticationModule'
  },
  {
    path:'register', canLoad:[AuthGuard], loadChildren:'./student-registration/student-registration.module#StudentRegistrationModule'  
  },
  {
    path:'students', canLoad:[AuthGuard], loadChildren:'./student/student.module#StudentModule'  
  },
  {
    path:'', redirectTo:'students', pathMatch:'full'
  },
  {
    path:'**', redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
