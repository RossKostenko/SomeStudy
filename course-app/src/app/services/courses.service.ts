import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseResponse, CoursesResponse } from '../core/course-response.interface';
import { Course } from '../core/course.interface';
import { Location } from '../core/location.enum';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<CoursesResponse>(`${Location.ROOT}${Location.COURSES}${Location.ALL}`);
  }
  // should add header for post request
  createCourse(course: Course) {
    return this.http.post<any>(`${Location.ROOT}${Location.COURSES}${Location.ADD}`, course);
  }

  // fix any types in methods below
  editCourse(id: string, course: Course): Observable<any> {
    return this.http.put<any>(`${Location.ROOT}${Location.COURSES}/${id}`, course);
  }

  getCourse(id: string): Observable<CourseResponse> {
    return this.http.get<CourseResponse>(`${Location.ROOT}${Location.COURSES}/${id}`);
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete<any>(`${Location.ROOT}${Location.COURSES}/${id}`);
  }
}
