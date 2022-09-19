import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  @Input() tableConfig: MyTableConfig;

  @Input() data: any [];

  constructor() {
  }

  ngOnInit(): void {
    this.data = [{
      ID: "ad43f3",
      Username: "peppe",
      Email: "giuseppe@gmail.com"
    },
      {
        ID: "sa244df",
        Username: "Dan1l0",
        Email: "Danilo@gmail.com"
      }]
  }

}

export class MyTableConfig {

  headers: MyHeaders [];

}

export class MyHeaders {

  key: string;

  label: string;

}
