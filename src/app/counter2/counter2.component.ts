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
  template: ` <div style="border: 2px solid gray; padding: 16px; margin: 16px">
    <h2>
      Version 2: countChange output and using an <code>effect</code> to emit
      changes
    </h2>
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
