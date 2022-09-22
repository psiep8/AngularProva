import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(data: any[], itemsForPage: number, numberPage: number): any[] {
    let start = (numberPage - 1) * itemsForPage;
    let end = start + itemsForPage;
    return data.slice(start, end)
  }

}
