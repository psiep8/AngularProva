import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonComponent} from './button/button.component';
import {TabellaComponent} from './tabella/tabella.component';
import {OrderPipe} from './pipes/order.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule} from "@angular/forms";
import { PaginationPipe } from './pipes/pagination.pipe';
import { FilterpagePipe } from './pipes/filterpage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TabellaComponent,
    OrderPipe,
    FilterPipe,
    PaginationPipe,
    FilterpagePipe,
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
