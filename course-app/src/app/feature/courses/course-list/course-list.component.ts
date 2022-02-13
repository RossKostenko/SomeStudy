import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CourseItem } from "src/app/models/course-item.model";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() editable: boolean = false;
  @Input() courses: CourseItem[] | undefined;

  @Output() listEvent = new EventEmitter();

  public editIcon = faPen;
  public deleteIcon = faTrash;
  public infoText =
    "Please use 'Add new course' button to add your first course";
  public infoTitle = "Your List Is Empty";

  private _isEmpty = false;
  get isEmpty() {
    return this._isEmpty;
  }

  set isEmpty(value: boolean) {
    this._isEmpty = value;
  }

  constructor() {
    if (!this.courses || this.courses.length === 0) {
      this.isEmpty = true;
    }
  }
}
