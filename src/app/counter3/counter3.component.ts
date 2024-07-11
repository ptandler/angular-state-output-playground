import { Component, input, WritableSignal } from "@angular/core";

@Component({
  selector: "app-counter3",
  standalone: true,
  template: `<button (click)="increment()">
    Increment {{ countSignal()() }}
  </button>`,
})
export class Counter3Component {
  // I don't like that `countSignal` is a `WritableSignal` and could be modified outside of this component,
  // and it's not so intuitive that you have a signal inside a signal.
  public readonly countSignal = input.required<WritableSignal<number>>();

  increment() {
    this.countSignal().update((value) => value + 1);
  }
}
