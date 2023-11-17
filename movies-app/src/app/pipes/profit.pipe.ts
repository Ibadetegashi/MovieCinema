import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profit'
})
export class ProfitPipe implements PipeTransform {

  transform(value: number, profit = 10): string {
    return (value*profit*1/100).toFixed(2);
  }

}
