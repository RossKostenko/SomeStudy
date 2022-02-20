import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  @Input() title = "";
  @Input() text = "";
}
