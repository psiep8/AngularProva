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
  }

}

export class MyTableConfig {

  headers: MyHeaders [];

}

export class MyHeaders {

  key: string;

  label: string;

}
