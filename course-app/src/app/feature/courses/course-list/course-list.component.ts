import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CourseItem } from "src/app/feature/courses/course-card/course-item.model";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() editable: boolean = false;
  @Input() courses: CourseItem[] | undefined;

  @Output() courseClickOutput = new EventEmitter();
  @Output() courseEditOutput = new EventEmitter();
  @Output() courseDeleteOutput = new EventEmitter();

  public editIcon = faPen;
  public deleteIcon = faTrash;
  public infoText =
    "Please use 'Add new course' button to add your first course";
  public infoTitle = "Your List Is Empty";

  onShowCourse() {
    this.courseClickOutput.emit();
  }

  onCourseEdit() {
    this.courseClickOutput.emit();
  }

  onCourseDelete() {
    this.courseClickOutput.emit();
  }
}
