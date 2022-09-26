import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterpage'
})
export class FilterpagePipe implements PipeTransform {

  transform(data: any[], page: number): any[] {
    if (page === 1) {
      return data.slice(page - 1, page + 1)
    } else {
      return data.slice(page - 2, page + 1)
    }
  }

}
