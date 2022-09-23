import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

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
    console.log(page)
  }

}

export class MyTableConfig {

  headers: MyHeaders [];

  order: MyOrder;

  search: MySearch;

  pagination: MyPagination;

}

export class MyHeaders {

  key: string;

  label: string;

}

export class MyOrder {

  defaultColumn: string;

  orderType: string;

}

export class MySearch {

  columns: string[]

}

export class MyPagination {

  itemPerPage: number;

  itemPerPageOptions: number [];

}

