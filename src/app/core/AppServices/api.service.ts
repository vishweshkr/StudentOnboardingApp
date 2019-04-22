import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ILogin } from '../models';
import { map, tap } from 'rxjs/operators';
import { TokenManagementService } from './token-management.service';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseUrl = environment.apiBaseUrl;
  studentsAPI = 'students';
  constructor(private http: HttpClient, private tokenService: TokenManagementService) {

  }

  register(student): Observable<any> {
    let students = JSON.parse(window.localStorage.getItem(this.studentsAPI));
    if(!students){ 
     students = [];
    }
    return this.http.post(this.baseUrl + this.studentsAPI, student).pipe(map((data) => { 
      students.push(data);
      window.localStorage.setItem(this.studentsAPI, JSON.stringify(students));
      return data;
    }));
  }

  update(id, student): Observable<any> {
    let students = JSON.parse(window.localStorage.getItem(this.studentsAPI));
    if(!students){ 
     students = [];
    }
    const editStudent = students.filter((student)=>student.id===id)[0];
    const index=students.indexOf(editStudent);
    students.splice(index,1);

    return this.http.put(this.baseUrl + this.studentsAPI + '/' + id, student).pipe(map((data) => { 
      students.splice(index,0,data);
      window.localStorage.setItem(this.studentsAPI, JSON.stringify(students));
      return data;
    }));
  }

  getAllStudents() {
    const students = window.localStorage.getItem(this.studentsAPI);
    if(!students){
      
      return this.http.get(this.baseUrl + this.studentsAPI).pipe(map((data) => { 
        window.localStorage.setItem(this.studentsAPI, JSON.stringify(data));
        return data;
      }));
      
    }
    return of(JSON.parse(students)); 
  }


  geStudentById(id: number) {


    let students = JSON.parse(window.localStorage.getItem(this.studentsAPI));
    if(students){

    const localStudent = students.filter( (student) => student.id == id)[0];
    
    return of([localStudent]);
   
    }
    else{
    return this.http.get(this.baseUrl + this.studentsAPI + '?id=' + id);
    } 


  }

  deleteStudent(id: number): Observable<any> {
    let students = JSON.parse(window.localStorage.getItem(this.studentsAPI));
    if(!students){ 
     students = [];
    }
    const editStudent = students.filter((student)=>student.id===id)[0];
    const index=students.indexOf(editStudent);
    students.splice(index,1);

    return this.http.delete(this.baseUrl + this.studentsAPI + '/' + id).pipe(map((data) => { 
    
      window.localStorage.setItem(this.studentsAPI, JSON.stringify(students));
      return data;
    }));
   
  }

  IsAuthenticated(login: ILogin) {
    return this.http.get(this.baseUrl + 'auth?username=' + login.username + '&password=' + login.password)
      .pipe(map((res: ILogin[]) => {
        if (res && res.length) {
          this.tokenService.authenticate(true, login.username);
        }
        return res;
      }));

  }

  logout() {
    window.localStorage.clear();
    return this.tokenService.authenticate(false, "");
  }

}
