import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardModule } from "./course-card/course-card.module";
import { CourseListModule } from "./course-list/course-list.module";
import { CourseCardEditModule } from "./course-card-edit/course-card-edit.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CourseListModule,
    CourseCardModule,
    CourseCardEditModule,
  ],
  exports: [CourseListModule, CourseCardModule, CourseCardEditModule],
})
export class CoursesModule {}
