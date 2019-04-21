import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title;
  @Input() modalTemplate: TemplateRef<any>;
  @Input() show: boolean;
 
  @Output() close = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.close.emit();
  }

}
