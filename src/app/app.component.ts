import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from "@angular/core";
import { FruitComponent } from "./fruit/fruit.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public fruits: string[] = ["fraise", "kiwi"];
  @ViewChild("myinput") public el: ElementRef<HTMLInputElement>;
  @ViewChildren(FruitComponent) public list: QueryList<FruitComponent>;

  public addFruit() {
    console.info(this.list);
    this.fruits.push(this.el.nativeElement.value);
    this.el.nativeElement.value = "";
  }

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }
}
