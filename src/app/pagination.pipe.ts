import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(data: any[], defaultItems: number, itemsForPage: string, numberPage: number): any[] {
    let i = +itemsForPage;
    let def = defaultItems * (numberPage - 1);
    let first = i * (numberPage - 1);
    if (i === 0) {
      return data.slice(def, def + defaultItems)
    } else {
      return data.slice(first, first + i)
    }
  }

}
