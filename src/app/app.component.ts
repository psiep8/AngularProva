import {Component} from '@angular/core';
import {MyButtonConfig} from "./button/button.component";
import {MyHeaders, MyOrder, MyPagination, MySearch, MyTableConfig} from "./tabella/tabella.component";


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
  pagination: MyPagination;
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

    this.search = {
      columns: [
        "id", "username", "email"
      ]
    }

    this.pagination = {

      itemPerPage: 3,
      itemPerPageOptions: [1, 2, 3]
    }

    this.firstTable = {
      headers: this.header,
      order: this.order,
      search: this.search,
      pagination: this.pagination
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
      },
      {
        id: "b534sd4",
        username: "farfallina",
        email: "ff@virgilio.com"
      },
      {
        id: "n9045iof",
        username: "1lly",
        email: "l1lly@hotmail.com"
      },
      {
        id: "uv8429cc",
        username: "k1ng",
        email: "king@outlook.com"
      },
      {
        id: "f3i2j02",
        username: "beststis",
        email: "best@libero.com"
      },
      {
        id: "b53u20v",
        username: "s4cccc",
        email: "sac@outlook.com"
      },
      {
        id: "g33v4b537",
        username: "furious",
        email: "king@yahoo.com"
      }]
  }


}
