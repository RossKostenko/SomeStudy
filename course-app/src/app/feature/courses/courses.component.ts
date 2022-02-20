import { Component, ChangeDetectionStrategy } from "@angular/core";
import { mockedCourseList } from "src/assets/mocks/mocks";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  public courseList = [...mockedCourseList];
}
