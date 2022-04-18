import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardModule } from "./course-card/course-card.module";
import { CourseListModule } from "./course-list/course-list.module";
import { CourseCardEditModule } from "./course-card-edit/course-card-edit.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CoursesComponent } from "./courses.component";

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    CourseListModule,
    CourseCardModule,
    CourseCardEditModule,
    SharedModule,
  ],
  exports: [
    CourseListModule,
    CourseCardModule,
    CoursesComponent,
    CourseCardEditModule,
    SharedModule,
  ],
})
export class CoursesModule {}
