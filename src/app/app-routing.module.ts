import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from "./book/list-book/list-book.component";
import {CreatBookComponent} from "./book/creat-book/creat-book.component";
import {EditBookComponent} from "./book/edit-book/edit-book.component";
import {DetailBookComponent} from "./book/detail-book/detail-book.component";

const routes: Routes = [
  {
    path: 'books',
    component: ListBookComponent,
  },
  {
    path: 'books/create',
    component: CreatBookComponent
  },
  {
    path: 'books/edit/:id',
    component: EditBookComponent
  },
  {
    path: 'books/:id',
    component: DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
