import { Component, signal } from "@angular/core";
import { outputFromObservable, toObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-counter1",
  standalone: true,
  template: `<button (click)="increment()">Increment {{ count() }}</button>`,
})
export class Counter1Component {
  protected readonly count = signal(0);

  // could be shortened as
  // public readonly countChanged = outputFromSignal(this.count);
  public readonly countChanged = outputFromObservable(toObservable(this.count));

  increment() {
    this.count.update((value) => value + 1);
  }
}

@Component({
  selector: "app-parent1",
  standalone: true,
  imports: [Counter1Component],
  template: ` <div class="example">
    <h2>
      Version 1: countChange output via
      <code>outputFromObservable(toObservable(this.count))</code>
    </h2>
    <p>
      Actually the "classical" outputs in Angular are meant for
      <a
        href="https://github.com/angular/angular/issues/56923#issuecomment-2220049354"
        target="_blank"
        >events, not for shared state</a
      >. So, while this solutions appears quite elegant to me, it's design is
      not following the original output concept.
    </p>

    <app-counter1 (countChanged)="parentCount.set($event)" class="counter" />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent1Component {
  protected readonly parentCount = signal(0);
}
