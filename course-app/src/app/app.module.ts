import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './feature/courses/courses.module';
import { HeaderModule } from './feature/header/header.module';
import { LoginModule } from './feature/login/login.module';
import { RegistrationModule } from './feature/registration/registration.module';
import { PasswordStrengthDirective } from './shared/directives/password-strength-validator.directive';
import { SharedModule } from './shared/shared.module';
import { CourseModule } from './feature/course/course.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PasswordStrengthDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    HeaderModule,
    SharedModule,
    LoginModule,
    RegistrationModule,
    FormsModule,
    CourseModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
