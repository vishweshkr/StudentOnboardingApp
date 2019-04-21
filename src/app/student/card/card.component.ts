import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormDataService } from '../../core/AppServices/FormData/form-data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],


})
export class CardComponent implements OnInit {
  @Input() data;
  @Output() viewStudent = new EventEmitter();


  backcolor:string

  constructor(private formdataService: FormDataService,private router:Router) {
   
   }

  ngOnInit() {
  }

  showDetail(){
    //this.viewStudent.emit(this.data);
    this.formdataService.isread  = true;
    this.formdataService.student = this.data;
    this.router.navigateByUrl('register/'+this.data.id);
  
  }

  editDetail(){
    this.formdataService.student = this.data;
    this.formdataService.isEdit  = true;
    this.router.navigateByUrl('register/'+this.data.id);
  }

  getColor(): string{
    return this.data.CategoryOption === "Domestic" ? "#f5f2d0" : "white";
 }


 deleteDetail()
 {
  this.viewStudent.emit(this.data);

  
 }

}
