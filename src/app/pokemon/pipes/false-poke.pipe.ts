import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'falsePoke'
})
export class FalsePokePipe implements PipeTransform {

  transform(valor : boolean = false): string {
      if(valor === false){
        return "No";
      }else{
        return "Si"
      }

  }

}
