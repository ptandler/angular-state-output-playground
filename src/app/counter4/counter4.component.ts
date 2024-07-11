import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter4",
  standalone: true,
  template: `<button (click)="increment()">Increment {{ count() }}</button>`,
})
export class Counter4Component {
  // I like this approach. Could be made simpler to define, similar to `model()`, maybe like this:
  // public readonly count = outputSignal(0);
  // will create a signal and an output for `count` that is read-only.
  // This would require that we can ensure that the output signal is read-only from outside somehow.
  protected readonly count = signal(0);
  public readonly countOutput = this.count.asReadonly();

  increment() {
    this.count.update((value) => value + 1);
  }
}
