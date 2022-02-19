import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: string = "button";
  @Input() addedClass = "";
  @Input() label = "";
  @Input() icon: IconDefinition | null = null;
  @Input() width = 24;
  @Input() height = 24;

  @Output() clickChange = new EventEmitter();

  onClick(): void {
    this.clickChange.emit();
  }
}
