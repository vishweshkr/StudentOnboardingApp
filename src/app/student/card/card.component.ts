import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormDataService } from '../../core/AppServices/FormData/form-data.service'
import { Router } from '@angular/router';
import {Constants} from '../../core/constants'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],


})
export class CardComponent implements OnInit {
  @Input() data;
  @Output() viewStudent = new EventEmitter();


  backcolor:string;
  
  constructor(private formdataService: FormDataService,private router:Router) {
   
   }

  ngOnInit() {
  }

  showDetail(){
   
    this.formdataService.isread  = true;
    this.formdataService.student = this.data;
    this.router.navigateByUrl(Constants.registerURL+this.data.id);
  
  }

  editDetail(){
    this.formdataService.student = this.data;
    this.formdataService.isEdit  = true;
    this.router.navigateByUrl(Constants.registerURL+this.data.id);
  }

  getColor(): string{
    return this.data.CategoryOption === Constants.domestic ? Constants.Offwhite : Constants.Offyellow;
 }


 deleteDetail()
 {
  this.viewStudent.emit(this.data);

  
 }

}
