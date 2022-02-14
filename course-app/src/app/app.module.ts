import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesModule } from "./feature/courses/courses.module";
import { HeaderModule } from "./feature/header/header.module";
import { CourseModule } from "./feature/course/course.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    HeaderModule,
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
