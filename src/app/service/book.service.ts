import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL + `/books`);
  }

  public createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL + `/books`, book);
  }

  public editBook(id:number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(API_URL + `/books/${id}`, book);
  }

  public getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(API_URL + `/books/${id}`);
  }

  public deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(API_URL + `/books/${id}`);
  }
}
