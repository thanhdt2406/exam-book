import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { CreatBookComponent } from './book/creat-book/creat-book.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DetailBookComponent } from './book/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    EditBookComponent,
    CreatBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
