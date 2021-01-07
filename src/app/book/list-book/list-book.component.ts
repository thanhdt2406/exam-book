import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  id: number = 0;
  books: Book[] = [];

  constructor(private bookService: BookService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe(data => {
      this.books = data;
    });
  }

  public deleteBook(id: number) {
    if (confirm('Are you sure?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.getAllBook();
      });
    }
  }

}
