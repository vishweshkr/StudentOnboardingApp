import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { APIService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private studentData;
  isEdit : boolean;
  isread: boolean;
  constructor(private api: APIService) { }

  getStudent(id: number){
    console.log(this.studentData);
    if(this.studentData){
      return of([this.studentData]);
    }
    else{
      return this.api.geStudentById(id);
    }
  }

  set student(data){
    this.studentData=data;
  }
}
