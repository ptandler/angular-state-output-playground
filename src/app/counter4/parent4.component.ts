import { Component, Signal, viewChild } from "@angular/core";
import { Counter4Component } from "./counter4.component";

@Component({
  selector: "app-parent4",
  standalone: true,
  imports: [Counter4Component],
  template: `<div style="border: 2px solid gray; padding: 16px; margin: 16px">
    <h2>Version 4: Access the signal of the child component.</h2>
    <app-counter4 #counter4 style="margin: 16px" />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent4Component {
  private readonly counter4 = viewChild.required<Counter4Component>("counter4");

  protected get parentCount(): Signal<number> {
    return this.counter4().countOutput;
  }

  // Would be good to have a shorthand for this:
  // Actually, I'd like to bind the parentCount to the output signal of the child from the template, e.g.
  // 1. define an OutputSignal in the parent component:
  //   `protected parentCount: OutputSignal<number>;`
  // 2. bind the countOutput to the parentCount in the template:
  //   `<app-counter4 (countOutput)="parentCount" />`
  //   or whatever syntax fits best.
}
