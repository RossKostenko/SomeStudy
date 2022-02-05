import { Observable, forkJoin, of } from "rxjs";
import {
  distinctUntilChanged,
  switchMap,
  catchError,
  pluck,
  map,
} from "rxjs/operators";

const userActionEmulation$ = new Observable((observer) => {
  setTimeout(() => observer.next({ value: "A" }), 1000);
  setTimeout(() => observer.next({ value: "B" }), 1500);
  setTimeout(() => observer.next({ value: "B" }), 1600);
  setTimeout(() => observer.next({ value: "C" }), 2000);
  setTimeout(() => observer.next({ value: "D" }), 3500);
  setTimeout(() => observer.next({ value: "E" }), 3500);
  setTimeout(() => observer.next({ value: "E" }), 5000);
  setTimeout(() => observer.complete(), 5001);
});

const sucessRequestEmulation$ = new Observable((observer) => {
  setTimeout(() => {
    observer.next({ value: `It's a response value` });
    observer.complete();
  }, 600);
});

const errorRequestEmulation$ = new Observable((observer) => {
  setTimeout(() => {
    observer.error({ error: `It's error from the server` });
    observer.complete();
  }, 1000);
});

userActionEmulation$
  .pipe(
    pluck("value"),
    distinctUntilChanged(),
    switchMap((value) =>
      forkJoin([
        of(value),
        sucessRequestEmulation$,
        errorRequestEmulation$.pipe(catchError((err) => of(err))),
      ])
    ),
    map(
      ([letter, { value }, { error }]) =>
        `Value - ${letter}; Response - ${value}; Error - ${error};`
    )
  )
  .subscribe(
    (result) => console.log(result),
    (err) => {
      throw err;
    },
    () => console.log("Execution ended")
  );

console.log("Execution started");
