import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardEditComponent } from "./course-card-edit.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/shared/pipes/pipes.module";

@NgModule({
  declarations: [CourseCardEditComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [CourseCardEditComponent, SharedModule],
})
export class CourseCardEditModule {}
