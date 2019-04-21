import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/AppServices/api.service';
import { FormDataService } from 'src/app/core/AppServices/FormData/form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.scss']
})
export class DisplayAllComponent implements OnInit {
  studentList: any[];
  showModal: boolean;
  selectedStudent;
  searchText: string;
  filterText: string;
  documentKeys: any[]
  devices = 'All Domestic International'.split(' ');
  selectedDevice;

  constructor(private apiService: APIService, private dataService: FormDataService, private router: Router) { 
    this.filterText = 'All';
  }

  ngOnInit() {
    this.getAllStudents();
    this.dataService.isEdit = false;
    this.dataService.isread = false;


  }

  private getAllStudents() {
    this.apiService.getAllStudents().subscribe((response) => {
      this.studentList = <any[]>response;
    });
  }

  showStudent(student) {
    this.selectedStudent = student;
    this.showModal = true;
    this.documentKeys = Object.keys(this.selectedStudent.documentOptions);
  }





  onChange(newValue) {
    this.selectedDevice = newValue;
  }


  deleteRecord(element) {


    this.apiService.deleteStudent(element.id).subscribe(() => {
      this.showModal = false;
        this.getAllStudents();
      }
    );



  }

}

