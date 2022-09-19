import { Component } from '@angular/core';
import {MyButtonConfig} from "./button/button.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProva';

  firstButton: MyButtonConfig = {
    customCssClass: "provaCss",
    text:"Premi qui",
    icon:"https://i.ytimg.com/vi/4f3mux0q7oY/maxresdefault.jpg"
  }
}
