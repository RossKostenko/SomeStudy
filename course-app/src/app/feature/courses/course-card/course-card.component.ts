import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { CourseItem } from "src/app/models/course-item.model";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() card: CourseItem | null = null;
}
