import { Component, effect, output, signal } from "@angular/core";

@Component({
  selector: "app-counter2",
  standalone: true,
  template: `<button (click)="increment()">Increment {{ count() }}</button>`,
})
export class Counter2Component {
  protected readonly count = signal(0);
  public readonly countChange = output<number>();

  constructor() {
    // maybe provide a shorthand `bindSignalToOutput(this.count, this.countChange)`?
    effect(() => {
      this.countChange.emit(this.count());
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }
}

@Component({
  selector: "app-parent2",
  standalone: true,
  imports: [Counter2Component],
  template: `<div class="example">
    <h2>
      Version 2: countChange output and using an <code>effect</code> to emit
      changes
    </h2>
    <p>
      This is similar to version 1. Version 1 appears more direct for me, as you
      can directly see where the output is generated from. The
      <code>effect</code> is "hidden" inside the constructor and not directly
      assigned to the output.
    </p>
    <app-counter2 (countChange)="parentCount.set($event)" class="counter" />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent2Component {
  protected readonly parentCount = signal(0);
}
