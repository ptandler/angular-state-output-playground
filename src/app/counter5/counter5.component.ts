import { Component, inject, Injectable, signal } from "@angular/core";

@Injectable()
class Counter5Service {
  public readonly count = signal(0);
}

@Component({
  selector: "app-counter5",
  standalone: true,
  template: `<button (click)="increment()">Increment {{ count() }}</button>`,
})
export class Counter5Component {
  /** get shared counter from service */
  protected readonly count = inject(Counter5Service).count;

  increment() {
    this.count.update((value) => value + 1);
  }
}

@Component({
  selector: "app-parent5",
  standalone: true,
  imports: [Counter5Component],
  providers: [Counter5Service],
  template: ` <div class="example">
    <h2>
      Version 5: use a service to share counter state between child and parent
    </h2>
    <p>
      Also, a quite elegant solution. However, is there a way to ensure that
      only the child component may modify the shared state? Another drawback is,
      that it's not straightforward if parent wants to use multiple instances of
      the child.
    </p>
    <app-counter5 class="counter" />
    Parent Count: {{ parentCount() }}
  </div>`,
})
export class Parent5Component {
  // in this case the parent could also modify the counter
  // TODO is there a way to prevent this?
  protected readonly parentCount = inject(Counter5Service).count;
}
