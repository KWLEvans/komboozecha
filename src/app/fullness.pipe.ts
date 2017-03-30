import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: 'fullness'
})
export class FullnessPipe implements PipeTransform {

  transform(input: Keg[]) {
    if (input !== undefined) {
    var output: Keg[] = [];
    console.log(input);
    input.forEach(keg => {
      if(keg.currentAmount === keg.totalAmount) {
        output.push(keg);
      }
    })
    return output;
    }
  }
}
