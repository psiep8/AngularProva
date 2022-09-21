import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonComponent} from './button/button.component';
import {TabellaComponent} from './tabella/tabella.component';
import {OrderPipe} from './order.pipe';
import {FilterPipe} from './filter.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TabellaComponent,
    OrderPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
