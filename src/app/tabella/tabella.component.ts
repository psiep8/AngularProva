import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  @Input() tableConfig: MyTableConfig;

  @Input() data: any [];

  sortedOrder: string = 'asc';

  key: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(key: string): void {
    this.key = key;
    if (this.sortedOrder === 'asc') {
      this.sortedOrder = 'desc'
    } else
      this.sortedOrder = 'asc'
  }
}

export class MyTableConfig {

  headers: MyHeaders [];

}

export class MyHeaders {

  key: string;

  label: string;

}


