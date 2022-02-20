import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { CourseItem } from "./course-item.model";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() card: CourseItem | undefined;
}
