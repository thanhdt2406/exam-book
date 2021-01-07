import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-creat-book',
  templateUrl: './creat-book.component.html',
  styleUrls: ['./creat-book.component.scss']
})
export class CreatBookComponent implements OnInit {

  book: Book = {
    id: -1
  };

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public createBook() {
    return this.bookService.createBook(this.book).subscribe(() => {
      alert("Success!");
      this.router.navigate(['/books']);
    });
  }

}
