import { Course } from './course.interface';

export interface CoursesResponse {
  successful: boolean;
  result: Course[] | null;
}

export interface CourseResponse {
  successful: boolean;
  result: Course | null;
}
