import { Component, signal } from "@angular/core";
import { Counter2Component } from "./counter2.component";

@Component({
  selector: "app-parent2",
  standalone: true,
  imports: [Counter2Component],
  template: `<div style="border: 2px solid gray; padding: 16px; margin: 16px">
    <app-counter2
      (countChange)="parentCount.set($event)"
      style="margin: 16px"
    />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent2Component {
  protected readonly parentCount = signal(0);
}
