import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: 'fullness'
})
export class FullnessPipe implements PipeTransform {

  transform(input: Keg[], desiredFullness) {
    if (input !== undefined) {
      var output: Keg[] = [];
      if (desiredFullness === "full") {
        input.forEach(keg => {
          if(keg.currentAmount === keg.totalAmount) {
            output.push(keg);
          }
        });
        return output;
    } else if (desiredFullness === "low") {
      input.forEach(keg => {
        if (keg.totalAmount <= 10) {
          output.push(keg);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
}
