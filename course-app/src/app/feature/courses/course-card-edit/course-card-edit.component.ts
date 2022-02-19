import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { alphaNumeric } from "src/app/shared/directives/alfanumeric-only.util";

@Component({
  selector: "app-course-card-edit",
  templateUrl: "./course-card-edit.component.html",
  styleUrls: ["./course-card-edit.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardEditComponent {
  public createCourse: FormGroup;

  constructor() {
    this.createCourse = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl("", Validators.required),
      addAuthors: new FormControl("", alphaNumeric()),
      duration: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  onSubmit() {
    console.log(this.createCourse);
  }
}
