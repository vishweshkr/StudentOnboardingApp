import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: Array<any>, args?: any): any {
   
    if(args.searchText == '' || !args.searchText){
      return value;
    }
    else if(value && value.length){
      return value.filter((val) => val.Name.toLowerCase().indexOf(args.searchText.toLowerCase()) >= 0);
    }
    return [];
  }

}
