import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCardEditComponent } from './feature/courses/course-card-edit/course-card-edit.component';
import { CourseCardComponent } from './feature/courses/course-card/course-card.component';
import { CoursesComponent } from './feature/courses/courses.component';
import { LoginComponent } from './feature/login/login.component';
import { RegistrationComponent } from './feature/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: 'add', component: CourseCardEditComponent },
      { path: ':id', component: CourseCardComponent },
      { path: ':id/edit', component: CourseCardEditComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
