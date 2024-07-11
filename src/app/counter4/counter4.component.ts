import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter4",
  standalone: true,
  template: `<button (click)="increment()">Increment {{ count() }}</button>`,
})
export class Counter4Component {
  protected readonly count = signal(0);
  public readonly countOutput = this.count.asReadonly();

  increment() {
    this.count.update((value) => value + 1);
  }
}
