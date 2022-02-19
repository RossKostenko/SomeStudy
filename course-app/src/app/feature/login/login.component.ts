import { Component, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public model: any = {};

  public emailValid = true;
  public passwordValid = true;

  onSubmit(loginForm: NgForm) {
    console.log("form: ", loginForm);
  }
}
