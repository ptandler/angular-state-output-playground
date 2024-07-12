import { Component, Signal, signal, viewChild } from "@angular/core";

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

@Component({
  selector: "app-parent4",
  standalone: true,
  imports: [Counter4Component],
  template: `<div class="example">
    <h2>Version 4: Access the signal of the child component.</h2>
    <p>
      Actually this approach is quite elegant, I like it. However, wiring things
      together could benefit from some syntactic sugar.
    </p>
    <app-counter4 #counter4 class="counter" />
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
