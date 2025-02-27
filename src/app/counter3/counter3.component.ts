import { Component, input, signal, WritableSignal } from "@angular/core";

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

@Component({
  selector: "app-parent3",
  standalone: true,
  imports: [Counter3Component],
  template: `<div class="example">
    <h2>
      Version 3: Pass a signal to be used for the output as input to the child
      component.
    </h2>
    <p>
      Not sure if this is an approach I would recommend, feels a bit strange and
      does not prevent that the parent modifies the signal as well - which is a
      design goal in this example.
    </p>
    <app-counter3 [countSignal]="parentCount" class="counter" />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent3Component {
  protected readonly parentCount = signal(0);
}
