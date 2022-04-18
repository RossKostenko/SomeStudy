import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CourseItem } from 'src/app/feature/courses/course-card/course-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  @Input() editable: boolean = false;
  @Input() courses: CourseItem[] | undefined;

  @Output() courseClickOutput = new EventEmitter();
  @Output() courseEditOutput = new EventEmitter();
  @Output() courseDeleteOutput = new EventEmitter();

  public deleteIcon = faTrash;
  public editIcon = faPen;

  public isAllCoursesShown = true;

  public infoText = "Please use 'Add new course' button to add your first course";
  public infoTitle = 'Your List Is Empty';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onShowCourse(course: CourseItem) {
    this.isAllCoursesShown = false;
    this.router.navigate([`${course.id}`], { relativeTo: this.activatedRoute });
  }

  onCourseEdit() {
    this.courseClickOutput.emit();
  }

  onCourseDelete() {
    this.courseClickOutput.emit();
  }
}
