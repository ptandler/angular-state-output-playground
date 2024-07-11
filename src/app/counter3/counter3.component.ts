import { Component, input, WritableSignal } from "@angular/core";

@Component({
  selector: "app-counter3",
  standalone: true,
  template: `<button (click)="increment()">
    Increment {{ countSignal()() }}
  </button>`,
})
export class Counter3Component {
  public readonly countSignal = input.required<WritableSignal<number>>();

  increment() {
    this.countSignal().update((value) => value + 1);
  }
}
