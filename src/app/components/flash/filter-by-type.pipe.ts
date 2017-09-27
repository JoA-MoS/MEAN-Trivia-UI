import { FlashMessage } from './flash-message';
import { Pipe, PipeTransform } from '@angular/core';
import { FlashMessageTypes } from './flash-message-types.enum';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(items: FlashMessage[], type: FlashMessageTypes): any {
    return items.filter((itm) => {
      return itm.type === type;
    });
  }

}
