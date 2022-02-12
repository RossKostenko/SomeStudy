import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { CourseItem } from "src/app/models/course-item.model";
import { mockedCourseList } from "./mocks/mocks";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  public courses: CourseItem[] = [...mockedCourseList];
  @Input() editable = false;

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
