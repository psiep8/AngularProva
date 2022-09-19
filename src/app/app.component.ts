import {Component} from '@angular/core';
import {MyButtonConfig} from "./button/button.component";
import {MyHeaders, MyTableConfig} from "./tabella/tabella.component";

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

  ngOnInit(): void {

    this.firstButton = {
      customCssClass: "provaCss",
      text: "Premi qui",
      icon: "https://i.ytimg.com/vi/4f3mux0q7oY/maxresdefault.jpg"
    }

    this.header = [{
      key: "ID",
      label: "ID"
    }, {
      key: "Username",
      label: "Username"
    }, {
      key: "Email",
      label: "Email"
    }]

    this.firstTable = {
      headers: this.header
    }


  }
}
