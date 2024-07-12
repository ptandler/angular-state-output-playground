import { Component } from "@angular/core";
import { Parent1Component } from "./counter1/counter1.component";
import { Parent2Component } from "./counter2/counter2.component";
import { Parent3Component } from "./counter3/counter3.component";
import { Parent4Component } from "./counter4/counter4.component";
import { Parent5Component } from "./counter5/counter5.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h1>How do I pass state from a component to its parent?</h1>
    <app-parent1 />
    <app-parent2 />
    <app-parent3 />
    <app-parent4 />
    <app-parent5 />
  `,
  styles: [],
  imports: [
    Parent1Component,
    Parent2Component,
    Parent3Component,
    Parent4Component,
    Parent5Component,
  ],
})
export class AppComponent {
  title = "angular-state-output-playground";
}
