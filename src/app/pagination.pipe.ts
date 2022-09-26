import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(data: any[], defaultItems: number, itemsForPage: string, page: number): any[] {
    let i = +itemsForPage;
    let def = defaultItems * (page - 1);
    let first = i * (page - 1);
    if (i === 0) {
      return data.slice(def, def + defaultItems)
    } else {
      return data.slice(first, first + i)
    }
  }
}
