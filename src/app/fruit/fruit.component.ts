import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";

@Component({
  selector: "app-fruit",
  templateUrl: "./fruit.component.html",
  styleUrls: ["./fruit.component.scss"]
})
export class FruitComponent implements OnInit {
  @Output() private deleteF: EventEmitter<string> = new EventEmitter();
  @ContentChild("ref") public el: ElementRef<HTMLParagraphElement>;

  constructor() {}

  ngOnInit() {}

  deleteFruit() {
    this.deleteF.emit(this.el.nativeElement.textContent);
  }
}
