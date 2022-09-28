import {Component} from '@angular/core';
import {MyButtonConfig} from "./button/button.component";
import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableActions,
  MyTableConfig
} from "./tabella/myclasses";


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
  actionButton: MyTableActions[];
  data: any[];

  message: string = '';


  ngOnInit(): void {

    this.firstButton = {
      customCssClass: "",
      text: "Premi qui",
      icon: "https://i.ytimg.com/vi/4f3mux0q7oY/maxresdefault.jpg"
    }

    this.actionButton = [{
      icon: "https://static.thenounproject.com/png/1054395-200.png",
      label: "Modifica",
      customCssClass: "btn btn-secondary"
    }, {
      icon: "https://img.favpng.com/15/18/2/button-delete-key-icon-png-favpng-QyKEi5YZShJs1T6X5mdfkLUSW.jpg",
      label: "Elimina",
      customCssClass: "btn btn-primary"
    }
    ]

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
      itemPerPage: 10,
      itemPerPageOptions: [5, 10, 15, 20]
    }

    this.firstTable = {
      headers: this.header,
      order: this.order,
      search: this.search,
      pagination: this.pagination,
      actions: this.actionButton
    }


    this.data = [{
      "id": 1,
      "username": "Lillian",
      "email": "Gladwin"
    }, {
      "id": 2,
      "username": "Juliana",
      "email": "Feasby"
    }, {
      "id": 3,
      "username": "Julio",
      "email": "Radcliffe"
    }, {
      "id": 4,
      "username": "Leyla",
      "email": "Andryszczak"
    }, {
      "id": 5,
      "username": "Roland",
      "email": "Carnegie"
    }, {
      "id": 6,
      "username": "Demetri",
      "email": "Jirick"
    }, {
      "id": 7,
      "username": "Andros",
      "email": "Tomasicchio"
    }, {
      "id": 8,
      "username": "Ludwig",
      "email": "Feavearyear"
    }, {
      "id": 9,
      "username": "Rowe",
      "email": "Heynel"
    }, {
      "id": 10,
      "username": "Kit",
      "email": "Bedome"
    }, {
      "id": 11,
      "username": "Fabe",
      "email": "Bubb"
    }, {
      "id": 12,
      "username": "Lucky",
      "email": "Wakelam"
    }, {
      "id": 13,
      "username": "Renard",
      "email": "McDonand"
    }, {
      "id": 14,
      "username": "Zacharia",
      "email": "Chinery"
    }, {
      "id": 15,
      "username": "Christie",
      "email": "Risely"
    }, {
      "id": 16,
      "username": "Tina",
      "email": "Kohter"
    }, {
      "id": 17,
      "username": "Trevor",
      "email": "Bakhrushin"
    }, {
      "id": 18,
      "username": "Johann",
      "email": "Greatorex"
    }, {
      "id": 19,
      "username": "Pip",
      "email": "Phippen"
    }, {
      "id": 20,
      "username": "Margarita",
      "email": "Kennet"
    }, {
      "id": 21,
      "username": "Twila",
      "email": "Pogosian"
    }, {
      "id": 22,
      "username": "Dacie",
      "email": "O' Timony"
    }, {
      "id": 23,
      "username": "Chucho",
      "email": "Wrey"
    }, {
      "id": 24,
      "username": "Mattie",
      "email": "Retchless"
    }, {
      "id": 25,
      "username": "Nan",
      "email": "Jouen"
    }, {
      "id": 26,
      "username": "Sibbie",
      "email": "Barthelemy"
    }, {
      "id": 27,
      "username": "Dani",
      "email": "Kingwell"
    }, {
      "id": 28,
      "username": "Lolita",
      "email": "Morit"
    }, {
      "id": 29,
      "username": "Briano",
      "email": "Duligal"
    }, {
      "id": 30,
      "username": "Laird",
      "email": "Sarle"
    }, {
      "id": 31,
      "username": "Chuck",
      "email": "Trotton"
    }, {
      "id": 32,
      "username": "Harrison",
      "email": "Cobleigh"
    }, {
      "id": 33,
      "username": "Friederike",
      "email": "Renshell"
    }, {
      "id": 34,
      "username": "Denyse",
      "email": "Vasilchenko"
    }, {
      "id": 35,
      "username": "Kareem",
      "email": "Bartomieu"
    }, {
      "id": 36,
      "username": "Gerhardt",
      "email": "O'Crevy"
    }, {
      "id": 37,
      "username": "Dion",
      "email": "McGeechan"
    }, {
      "id": 38,
      "username": "Ryun",
      "email": "Wadie"
    }, {
      "id": 39,
      "username": "Rosalyn",
      "email": "Moxson"
    }, {
      "id": 40,
      "username": "Clim",
      "email": "Winkett"
    }]
  }

  clickButtonCustom(data: any) {
    console.log(data);
  }


}
