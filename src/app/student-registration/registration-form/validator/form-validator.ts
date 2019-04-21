import { AbstractControl, FormGroup, FormControl, FormArray } from '@angular/forms';



export function LastScoreValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if((control.value) && (control.value.toString().length>1 && control.value.toString().length<=5 && control.value<100))
    {
      return null;
    }
    return {invalid:true};
  }

  
  export function dobValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value)
      {
        //let date=control.value.toString().spl;
        let dateofBirth = control.value.toString().split('-');
        //1992-11-12
        let ageyear = dateofBirth[0];
        let agemonth = dateofBirth[1];
        let agedate = dateofBirth[2];

        let today = new Date();
        
        let date = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
        
        if(year-ageyear<30  && year-ageyear>3){
        return null;
        }
      
      }
      
      return {invalid:true};
    }
  
  

  export function validateControl(formGroup: FormGroup,documentOptionArray:any){

    const  domicile =0;
    const  marksheets =1;
    const  birthcertificate =2;
    const  police_clearance =3;
    const  passport =4;
    const  declaration =5;


    let categoryControl: FormControl = <FormControl>formGroup.controls["CategoryOption"];
    let documentControl: FormControl = <FormControl>formGroup.controls["documentOptions"];
    let array : FormArray = documentControl.value;

    if(!array[domicile] || !array[marksheets] || !array[birthcertificate] || !array[declaration]){
      return {checkboxunfill:true}
    }

    if(categoryControl.value=="International"){
  
      if(!array[police_clearance] || !array[passport]){
        return {international:true}
      }

    }
  
    return null;
  
}

