import { Result } from './../models/result';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultsFilter'
})
export class ResultsFilterPipe implements PipeTransform {

  transform(items: Result[], arg: string): any {
    if (arg && arg.length > 0) {
      return items.filter(item => {
        return item.userFirstName.toUpperCase().includes(arg.toUpperCase());
      });
    } else {
      return items;
    }
  }

}
