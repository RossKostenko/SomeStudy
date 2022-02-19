import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesModule } from "./feature/courses/courses.module";
import { HeaderModule } from "./feature/header/header.module";
import { LoginModule } from "./feature/login/login.module";
import { RegistrationModule } from "./feature/registration/registration.module";
import { PasswordStrengthDirective } from "./shared/directives/password-strength-validator.directive";
import { SharedModule } from "./shared/shared.module";

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
