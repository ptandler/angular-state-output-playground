import { Component } from "@angular/core";
import { Parent1Component } from "./counter1/parent1.component";
import { Parent2Component } from "./counter2/parent2.component";
import { Parent3Component } from "./counter3/parent3.component";
import { Parent4Component } from "./counter4/parent4.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h1>How do I pass state from a component to its parent?</h1>
    <app-parent1 />
    <app-parent2 />
    <app-parent3 />
    <app-parent4 />
  `,
  styles: [],
  imports: [
    Parent1Component,
    Parent2Component,
    Parent3Component,
    Parent4Component,
  ],
})
export class AppComponent {
  title = "angular-state-output-playground";
}
