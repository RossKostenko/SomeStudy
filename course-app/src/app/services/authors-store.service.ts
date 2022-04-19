import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  // find out what type should be authors BehaviorSubject
  private authors$$ = new BehaviorSubject<any>(null);

  public isLoading$ = this.isLoading$$.asObservable();
  public authors$ = this.authors$$.asObservable();

  constructor(private authorsService: AuthorsService) {}

  public getAll() {
    this.authors$$.next(this.authorsService.getAll());
  }

  public addAuthor(author: string): void {
    this.authorsService.addAuthor(author);
  }
}
