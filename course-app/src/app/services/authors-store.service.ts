import { Injectable } from '@angular/core';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  constructor(private authorsService: AuthorsService) {}

  getAll() {
    return this.authorsService.getAll();
  }

  addAuthor(author: any): void {
    this.authorsService.addAuthor(author);
  }
}
