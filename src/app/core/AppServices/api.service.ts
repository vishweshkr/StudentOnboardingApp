import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ILogin } from '../models';
import { map } from 'rxjs/operators';
import { TokenManagementService } from './token-management.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseUrl = environment.apiBaseUrl;
  studentsAPI = 'students';
  constructor(private http: HttpClient, private tokenService: TokenManagementService) {

  }

  register(student): Observable<any> {
    return this.http.post(this.baseUrl + this.studentsAPI, student);
  }

  update(id, student): Observable<any> {

    return this.http.put(this.baseUrl + this.studentsAPI + '/' + id, student);
  }

  getAllStudents() {
    return this.http.get(this.baseUrl + this.studentsAPI);
  }

  geStudentById(id: number) {
    return this.http.get(this.baseUrl + this.studentsAPI + '?id=' + id);
  }

  deleteStudent(id: number): Observable<any> {
    debugger;
    return this.http.delete(this.baseUrl + this.studentsAPI + '/' + id);
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

    return this.tokenService.authenticate(false, "");
  }

}
