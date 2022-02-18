import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JoinWithComaPipe } from "./join-with-coma/join-with-coma.pipe";
import { HoursPipe } from "./hours/hours.pipe";

@NgModule({
  declarations: [JoinWithComaPipe, HoursPipe],
  imports: [CommonModule],
  exports: [JoinWithComaPipe, HoursPipe],
})
export class PipesModule {}
