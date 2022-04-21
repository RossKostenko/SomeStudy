import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, switchMap, tap } from 'rxjs';
import { AuthorsService } from './authors.service';
import { Author } from '../core/author.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private authors$$ = new BehaviorSubject<Author[] | null>(null);

  public isLoading$ = this.isLoading$$.asObservable();
  public authors$ = this.authors$$.asObservable();

  constructor(private authorsService: AuthorsService) {}

  public getAll() {
    this.isLoading$$.next(true);
    return this.authorsService.getAll().pipe(
      map((responseData) => responseData.result),
      tap((authors: Author[] | null) => {
        this.authors$$.next(authors);
      }),
      switchMap(() => this.authors$),
      tap(() => this.isLoading$$.next(false)),
      catchError((err) => {
        this.isLoading$$.next(false);
        throw 'error in source. Details: ' + err;
      }),
    );
    //  return this.authors$.pipe(
    //    switchMap((authors) => {
    //      if (authors) {
    //        return of(authors);
    //      } else {
    //        return this.authorsService.getAll().pipe(
    //          tap((authors) => this.authors$$.next(authors)),
    //          switchMap(() => this.authors$),
    //        );
    //      }
    //    }),
    //  );
  }

  public addAuthor(author: string): void {
    this.authorsService.addAuthor(author);
  }
}
