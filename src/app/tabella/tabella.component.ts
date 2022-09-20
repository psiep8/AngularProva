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

  constructor() {
  }

  ngOnInit(): void {
    this.key = this.tableConfig.order.defaultColumn;
    this.sortedOrder = this.tableConfig.order.orderType;
  }

  onSelect(key: string): void {
    if (this.key !== key || this.sortedOrder === 'asc') {
      this.key = key
      this.sortedOrder = 'desc'
    } else {
      this.sortedOrder = 'asc'
    }
  }
}

export class MyTableConfig {

  headers: MyHeaders [];

  order: MyOrder;

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

