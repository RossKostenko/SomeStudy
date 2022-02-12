import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  // Ask why i cannot not use no assignement
  @Input() icon: IconDefinition | null = null;

  constructor() {}

  ngOnInit(): void {}
}
