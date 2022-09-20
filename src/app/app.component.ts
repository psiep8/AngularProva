import {Component} from '@angular/core';
import {MyButtonConfig} from "./button/button.component";
import {MyHeaders, MyTableConfig} from "./tabella/tabella.component";
import {orderBy} from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProva';

  firstButton: MyButtonConfig;
  header: MyHeaders[];
  firstTable: MyTableConfig;
  data: any[];

  ngOnInit(): void {

    this.firstButton = {
      customCssClass: "provaCss",
      text: "Premi qui",
      icon: "https://i.ytimg.com/vi/4f3mux0q7oY/maxresdefault.jpg"
    }

    this.header = [{
      key: "id",
      label: "ID"
    }, {
      key: "username",
      label: "Username"
    }, {
      key: "email",
      label: "Email"
    }]

    this.firstTable = {
      headers: this.header
    }

    this.data = [{
      id: "ad43f3",
      username: "peppe",
      email: "giuseppe@gmail.com"
    },
      {
        id: "sa244df",
        username: "Dan1l0",
        email: "Danilo@gmail.com"
      }]
  }


}
