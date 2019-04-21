import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ILogin } from '../models';
import { map } from 'rxjs/operators';
import { TokenManagementService } from './token-management.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient,private tokenService:TokenManagementService) { 

  }

  register(student) : Observable<any>{
    return this.http.post('http://localhost:3000/students',student);
  }

  update(id,student) : Observable<any>{

    return this.http.put('http://localhost:3000/students/'+id,student);
  }

  getAllStudents(){
    return this.http.get('http://localhost:3000/students');
  }

  geStudentById(id: number) {
    return this.http.get('http://localhost:3000/students?id='+id);
  }

  deleteStudent(id:number): Observable<any>{
    debugger;
    return this.http.delete('http://localhost:3000/students/'+id);
  }

  IsAuthenticated(login:ILogin){
    return this.http.get('http://localhost:3000/auth?username='+login.username+'&password='+login.password)
    .pipe(map((res: ILogin[]) => {
      if(res && res.length)
       {
         this.tokenService.authenticate(true,login.username);
       }
      return res;
    }));
    
  }

  logout(){
    
    return this.tokenService.authenticate(false,"");
  }

}
