import {Component} from '@angular/core';
import {MyButtonConfig} from "./button/button.component";
import {MyHeaders, MyOrder, MySearch, MyTableConfig} from "./tabella/tabella.component";

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
  order: MyOrder;
  search: MySearch;
  data: any[];


  ngOnInit(): void {

    this.firstButton = {
      customCssClass: "provaCss",
      text: "Premi qui",
      icon: "https://i.ytimg.com/vi/4f3mux0q7oY/maxresdefault.jpg"
    }
    this.order = {
      defaultColumn: "id",
      orderType: "desc"
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
      headers: this.header,
      order: this.order,
      search: this.search
    }

    this.search = {
      columns: [
        "id", "username", "email"
      ]
    }

    this.data = [{
      id: "ad43f3",
      username: "Peppe",
      email: "giuseppe@gmail.com"
    },
      {
        id: "sa244df",
        username: "Dan1l0",
        email: "danilo@gmail.com"
      }
      ,
      {
        id: "h452f2v",
        username: "Soccia",
        email: "aus@gmail.com"
      }]
  }


}
