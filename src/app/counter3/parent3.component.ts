import { Component, signal } from "@angular/core";
import { Counter3Component } from "./counter3.component";

@Component({
  selector: "app-parent3",
  standalone: true,
  imports: [Counter3Component],
  template: `<div style="border: 2px solid gray; padding: 16px; margin: 16px">
    <h2>
      Version 3: Pass a signal to be used for the output as input to the child
      component.
    </h2>
    <app-counter3 [countSignal]="parentCount" style="margin: 16px" />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent3Component {
  protected readonly parentCount = signal(0);
}
