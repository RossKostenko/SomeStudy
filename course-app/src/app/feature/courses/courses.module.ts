import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardModule } from "./course-card/course-card.module";
import { CourseListModule } from "./course-list/course-list.module";
import { CoursesComponent } from "./courses.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CourseListModule, CourseCardModule, SharedModule],
  exports: [CourseListModule, CourseCardModule, CoursesComponent, SharedModule],
})
export class CoursesModule {}
