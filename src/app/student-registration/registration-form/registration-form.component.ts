import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormArray,Validators} from '@angular/forms';
import {LastScoreValidator, validateControl,dobValidator} from './validator/form-validator';
import { APIService } from 'src/app/core/AppServices/api.service';
import { FormDataService } from 'src/app/core/AppServices/FormData/form-data.service';
import { Router,ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})

export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;
  
  documentOptions   = [
    { id: 1, name: 'Domicile' },
    { id: 2, name: 'Marksheets' },
    { id: 3, name: 'Birth Certificate' },
    { id: 4, name: 'Police Clearance' },
    { id: 5, name: 'Passport' },
    { id: 6, name: 'Declaration' }
  ];

  CategoryOptions=[
    {text:"Domestic",id:1},
    {text:"International",id:2}
  ];
  selectedStudent;
  isEdit: boolean;
  isRead: boolean;
  noStudent: boolean;
  constructor(private formBuilder: FormBuilder,private apiService: APIService,
    private formDataService: FormDataService, private route:ActivatedRoute,private router:Router) { 
    


  }

  

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    if(id){
      this.isEdit = this.formDataService.isEdit;
      this.isRead = !this.isEdit;
    }
    const formDocumentControls = this.documentOptions.map(control => new FormControl(false));
   
    this.registrationForm = this.formBuilder.group({
     
      CategoryOption: new FormControl('Domestic'),
      Name: new FormControl('',Validators.required),
      FatherName: new FormControl('',Validators.required),
      MotherName: new FormControl('',Validators.required),
      lastscore:new FormControl('',[Validators.required,LastScoreValidator]),
      DOB:new FormControl('',[Validators.required,dobValidator]),
      documentOptions: new FormArray(formDocumentControls)
    },{validator: (formGroup: FormGroup) => {
      return validateControl(formGroup,this.documentOptions);
    }
    });

    if(this.isRead){
      this.registrationForm.disable();
    }

    if(this.isEdit || this.isRead){
      this.formDataService.getStudent(id).subscribe((data: any[]) => {
        if(data && data.length){
          this.selectedStudent = data[0];
          if(this.selectedStudent){
        
            const keys = Object.keys(this.selectedStudent.documentOptions);
            const docArr = [];
            keys.forEach((k)=> docArr.push(this.selectedStudent.documentOptions[k]));
            this.registrationForm.setValue({
              Name: this.selectedStudent.Name,
              FatherName: this.selectedStudent.FatherName,
              documentOptions: docArr,
              MotherName:this.selectedStudent.MotherName,
              CategoryOption: this.selectedStudent.CategoryOption,
              lastscore: this.selectedStudent.lastscore,
              DOB: this.selectedStudent.DOB
            });
          }
        }
        else{
          this.noStudent = true;
        }
      });
    }

  }

  mapCheckboxValues(source, dest){
    const obj = {};
    source.map((val, index) => {
    obj[val.name]=dest[index];
    });
    return obj;
    } 
     
    
  onSubmit(){
 
    this.registrationForm.value.documentOptions = this.mapCheckboxValues(this.documentOptions,this.registrationForm.value.documentOptions);


    
    if(this.selectedStudent){
    this.apiService.update(this.selectedStudent.id,this.registrationForm.value).subscribe(
      (val) => {
      this.registrationForm.reset();
      this.router.navigateByUrl('/');
      }
    );
  }
  else{
  this.apiService.register(this.registrationForm.value).subscribe(
    (val) => {
    this.registrationForm.reset();
    this.router.navigateByUrl('/');
    }
  );
}

}



}
