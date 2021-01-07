import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  id: number = 0;
  book: Book = {
    id: 0
  };

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
    this.getBookById(this.id);
  }

  public getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }

  editBook(id: number) {
    this.bookService.editBook(id, this.book).subscribe(() => {
      alert("Success!");
      this.router.navigate(['/books']);
    });
  }
}
