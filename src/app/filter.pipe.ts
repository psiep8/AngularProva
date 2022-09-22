import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], filterText: string): any[] {
    if (!array) return [];
    if (!filterText) return array;
    filterText = filterText.toLowerCase();
    return array.filter(items => {
      return items.id.toLowerCase().includes(filterText);
    })
  }
}
