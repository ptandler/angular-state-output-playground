# Angular State Output Playground

Playground to try different ways how I can pass state information from a child component to its parent in Angular using signals.

I implemented 4 versions so far:

1. Define a `countChange` output via `outputFromObservable(toObservable(this.count))`
   - This was my initial idea I proposed as [feature request](https://github.com/angular/angular/issues/56923)
2. Define a `countChange` output and use an `effect` to emit whenever the count changes
3. Pass a signal to be used for the output as input to the child component
   - not sure if this is an approach one would recommend, feels a bit strange and does not prevent that the parent modifies the signal as well
4. Provide a public read-only signal in the child component and access this via reference to the child component from its parent
   - actually this approach is quite elegant, however, wiring things together could benefit from some syntactic sugar.
5. Use a service to share counter state between child and parent
   - Also, a quite elegant solution. However, is there a way to ensure that only the child component may modify the shared state?
   - Another drawback is, that it's not straightforward if parent wants to use multiple instances of the child. They all would share the same state.
     (Or you could extend the service that is supports multiple counter and use IDs, but this feels quite complicated for a state that logically belongs to the child.)

I didn't implement a version with a shared service, which is definitively a good choice if the state is a bit more complex and / or does not really belong logically to the child component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
