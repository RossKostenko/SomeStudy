import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorPayload } from '../core/author-payload.interface';
import { Location } from '../core/location.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  public getAll() {
    // try to fix any types
    this.http.get<any>(`${Location.ROOT}${Location.AUTHORS}${Location.ALL}`).subscribe((response): any => {
      if (response?.successful) {
        console.log(response.result);
      } else {
        console.log(response);
      }
    });
  }

  public addAuthor(author: string) {
    const authorPayload: AuthorPayload = { name: author };
    this.http.put<any>(`${Location.ROOT}${Location.AUTHORS}${Location.ALL}`, authorPayload).subscribe((response) => {
      console.log(response);
    });
  }
}
