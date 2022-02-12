import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardModule } from "./course-card/course-card.module";
import { CourseListModule } from "./course-list/course-list.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, CourseListModule, CourseCardModule],
  exports: [CourseListModule, CourseCardModule],
})
export class CoursesModule {}
