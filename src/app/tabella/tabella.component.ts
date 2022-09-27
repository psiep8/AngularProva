import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<void>();
  @Output() insertEvent = new EventEmitter<string>();


  sortedOrder: string = '';

  key: string;

  columns: string[];

  filterText: string = '';

  selectedField: string = '';

  selectedItemsOption: string = '';

  itemsOptionsPage: number [];

  page: number = 1;

  @Output() outputTable = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.columns = this.tableConfig.search.columns;
    this.itemsOptionsPage = this.tableConfig.pagination.itemPerPageOptions;
    this.key = this.tableConfig.order.defaultColumn;
    this.sortedOrder = this.tableConfig.order.orderType;
    this.selectedItemsOption = this.tableConfig.pagination.itemPerPage.toString();
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

  onClickButton(action: MyTableActionEnum, row: any) {
    this.outputTable.emit({action: action, row: row})
  }

  addNewItem(action: MyTableActionEnum) {
    this.outputTable.emit({action: action});
  }

}
