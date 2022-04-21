import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorPayload } from '../core/author-payload.interface';
import { AuthorResponse } from '../core/author-response.interface';
import { Location } from '../core/location.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<AuthorResponse>(`${Location.ROOT}${Location.AUTHORS}${Location.ALL}`);
  }

  public addAuthor(author: string) {
    const authorPayload: AuthorPayload = { name: author };
    this.http.put<any>(`${Location.ROOT}${Location.AUTHORS}${Location.ALL}`, authorPayload).subscribe((response) => {
      console.log(response);
    });
  }
}
