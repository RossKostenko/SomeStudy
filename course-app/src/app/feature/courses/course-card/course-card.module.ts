import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card.component";
import { ButtonModule } from "src/app/shared/component/button/button.module";
import { PipesModule } from "src/app/shared/pipes/pipes.module";

@NgModule({
  declarations: [CourseCardComponent],
  imports: [CommonModule, ButtonModule, PipesModule],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
