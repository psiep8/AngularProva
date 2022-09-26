import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterpage'
})
export class FilterpagePipe implements PipeTransform {

  transform(data: any[], defaultItems: number, itemsForPage: string, page: number): any[] {

    let i = +itemsForPage;
    if (i === 0) {
      return data.slice(0, data.length / defaultItems)
    } else {
      let div1 = data.length % i;
      if (div1 == 0) {
        return data.slice(0, data.length / i);
      } else {
        return data.slice(0, (data.length / i) + 1);
      }
    }
  }
}


