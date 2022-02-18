import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  OnInit,
  ElementRef,
  ViewEncapsulation,
} from "@angular/core";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  @Input() title = "";
  @Input() message = "";
  @Input() id = "";
  @Input() cancelBtn = "cancel";
  @Input() okBtn = "Ok";

  public closeIcon = faWindowClose;

  private element: any;

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    if (!this.id) {
      console.error("modal must have id");
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener(
      "click",
      (el: { target: { className: string } }) => {
        if (el.target.className === "app-modal-background") {
          return;
        }

        if (el.target.className === "app-modal-content") {
          return;
        }
      }
    );
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.close.emit();
  }
}
