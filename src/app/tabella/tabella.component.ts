import {Component, Input, OnInit} from '@angular/core';
import {MyTableActionEnum, MyTableConfig} from "./myclasses";


@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {
  action = MyTableActionEnum;

  @Input() tableConfig: MyTableConfig;

  @Input() data: any [];

  sortedOrder: string = '';

  key: string;

  columns: string[];

  filterText: string = '';

  selectedField: string = '';

  selectedItemsOption: string = '';

  defaultItems: number;

  itemsOptionsPage: number [];

  page: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.columns = this.tableConfig.search.columns;
    this.defaultItems = this.tableConfig.pagination.itemPerPage;
    this.itemsOptionsPage = this.tableConfig.pagination.itemPerPageOptions;
    this.key = this.tableConfig.order.defaultColumn;
    this.sortedOrder = this.tableConfig.order.orderType;
  }

  onSelect(key: string): void {
    this.page = 1;
    if (this.key !== key || this.sortedOrder === 'asc') {
      this.key = key
      this.sortedOrder = 'desc'
    } else {
      this.sortedOrder = 'asc'
    }
  }

  selectPage(page: number): void {
    this.page = page;
  }

}
