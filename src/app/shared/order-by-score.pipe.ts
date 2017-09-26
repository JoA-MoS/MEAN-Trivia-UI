import { Result } from './../models/result';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByScore'
})
export class OrderByScorePipe implements PipeTransform {

  transform(array: Result[], arg?: string): any {
    let direction = 1;
    if (arg === 'desc') {
      direction = -1;
    }
    if (array) {
      array.sort((a: Result, b: Result) => {
        if (a.score < b.score) {
          return -1 * direction;
        } else if (a.score > b.score) {
          return 1 * direction;
        } else {
          return 0;
        }
      });
    }
    return array;
  }

}
