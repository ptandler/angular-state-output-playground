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
