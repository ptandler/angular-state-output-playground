import { Component } from "@angular/core";
import { Parent1Component } from "./counter1/parent1.component";
import { Parent2Component } from "./counter2/parent2.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-parent1 />
    <app-parent2 />
  `,
  styles: [],
  imports: [Parent1Component, Parent2Component],
})
export class AppComponent {
  title = "angular-state-output-playground";
}
