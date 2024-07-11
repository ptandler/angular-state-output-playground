# Angular State Output Playground

Playground to try different ways how I can pass state information from a child component to its parent in Angular using signals.

I implemented 4 versions so far:

1. Define a `countChange` output via `outputFromObservable(toObservable(this.count))`
   - This was my initial idea I proposed as [feature request](https://github.com/angular/angular/issues/56923)
2. Define a `countChange` output and use an `effect` to emit whenever the count changes
3. Pass a signal to be used for the output as input to the child component
4. Provide a public read-only signal in the child component and access this via reference to the child component from its parent  


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
