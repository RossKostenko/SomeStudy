import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CourseItem } from "src/app/models/course-item.model";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() card: CourseItem | null = null;
  @Input() editable = false;

  public editIcon = faPen;
  public deleteIcon = faTrash;
}
