import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args.FilterText == 'All' || !args.FilterText){
    
      return value;
    }
    else if(value && value.length){
     
      return value.filter((val) => val.CategoryOption.toLowerCase().indexOf(args.FilterText.toLowerCase()) >= 0);
    }
    return [];
  }

}








