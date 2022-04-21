import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, switchMap, tap } from 'rxjs';
import { Course } from '../core/course.interface';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private course$$ = new BehaviorSubject<Course | null>(null);
  private courses$$ = new BehaviorSubject<Course[] | null>(null);

  public isLoading$ = this.isLoading$$.asObservable();
  public course$ = this.course$$.asObservable();
  public courses$ = this.courses$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  public getAll() {
    this.isLoading$$.next(true);
    return this.coursesService.getAll().pipe(
      map((responseData) => responseData.result),
      tap((courses: Course[] | null) => {
        this.courses$$.next(courses);
      }),
      switchMap(() => this.courses$),
      tap(() => this.isLoading$$.next(false)),
      catchError((err) => {
        this.isLoading$$.next(false);
        throw 'Error in CoursesService. Details: ' + err;
      }),
    );
  }

  getCourse(id: string) {
    this.isLoading$$.next(true);
    return this.coursesService.getCourse(id).pipe(
      map((responseData) => responseData.result),
      tap((course: Course | null) => {
        this.course$$.next(course);
      }),
      switchMap(() => this.course$),
      tap(() => this.isLoading$$.next(false)),
      catchError((err) => {
        this.isLoading$$.next(false);
        throw 'Error in CoursesService. Details: ' + err;
      }),
    );
  }

  // Should add header with token data
  createCourse(course: Course) {
    this.isLoading$$.next(true);
    return this.coursesService.createCourse(course).pipe(
      tap(() => this.isLoading$$.next(false)),
      catchError((err) => {
        this.isLoading$$.next(false);
        throw 'Error in CoursesService. Details: ' + err;
      }),
    );
  }

  editCourse(id: string, course: Course) {
    return this.coursesService.editCourse(id, course).pipe(
      tap(() => this.isLoading$$.next(false)),
      catchError((err) => {
        this.isLoading$$.next(false);
        throw 'Error in CoursesService. Details: ' + err;
      }),
    );
  }

  deleteCourse(id: string) {
    return this.coursesService.deleteCourse(id).pipe(
      tap(() => this.isLoading$$.next(false)),
      catchError((err) => {
        this.isLoading$$.next(false);
        throw 'Error in CoursesService. Details: ' + err;
      }),
    );
  }
}
