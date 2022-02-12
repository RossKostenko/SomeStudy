import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JoinWithComaPipe } from "./join-with-coma/join-with-coma.pipe";
import { HoursPipe } from "./hours/hours.pipe";
import { TransformDatePipe } from "./transform-date/transform.date.pipe";

@NgModule({
  declarations: [JoinWithComaPipe, HoursPipe, TransformDatePipe],
  imports: [CommonModule],
  exports: [JoinWithComaPipe, HoursPipe, TransformDatePipe],
})
export class PipesModule {}
