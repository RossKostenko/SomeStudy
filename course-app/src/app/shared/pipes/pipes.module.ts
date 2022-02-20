import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StringJoinerPipe } from "./string-joiner/string-joiner.pipe";
import { DurationPipe } from "./duration/duration.pipe";
import { CreationDatePipe } from "./creation-date/creation-date.pipe";

@NgModule({
  declarations: [StringJoinerPipe, DurationPipe, CreationDatePipe],
  imports: [CommonModule],
  exports: [StringJoinerPipe, DurationPipe, CreationDatePipe],
})
export class PipesModule {}
