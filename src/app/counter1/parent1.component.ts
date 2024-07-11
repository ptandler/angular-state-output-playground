import { Component, signal } from "@angular/core";
import { Counter1Component } from "./counter1.component";

@Component({
  selector: "app-parent1",
  standalone: true,
  imports: [Counter1Component],
  template: `<div style="border: 2px solid gray; padding: 16px; margin: 16px">
    <app-counter1
      (countChanged)="parentCount.set($event)"
      style="margin: 16px"
    />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent1Component {
  protected readonly parentCount = signal(0);
}
