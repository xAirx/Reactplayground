/* Another example: If we need a function that accepts multiple types, it is better to use a generic than the any type.

Below shows the issue with using any:
 */

function logLength(a: any) {
  console.log(a.length); // No error
  return a;
}

let hello = "Hello world";
logLength(hello); // 11

let howMany = 8;
logLength(howMany); // undefined (but no TypeScript error - surely we want TypeScript to tell us we've tried to access a length property on a number!)
/* We could try using a generic: */

function logLength<T>(a: T) {
  console.log(a.length); // ERROR: TypeScript isn't certain that `a` is a value with a length property
  return a;
}

/*

At least we are now getting some feedback that we can use to tighten up our code.

Solution: use a generic that extends an interface that ensures every argument passed in has a length property: */

interface hasLength {
  length: number;
}

function logLength<T extends hasLength>(a: T) {
  console.log(a.length);
  return a;
}

let hello = "Hello world";
logLength(hello); // 11

let howMany = 8;
logLength(howMany); // Error: numbers don't have length properties

/* We could also write a function where the argument is an array of elements that all have a length property:
 */

interface hasLength {
  length: number;
}

function logLengths<T extends hasLength>(a: T[]) {
  a.forEach((element) => {
    console.log(element.length);
  });
}

let arr = [
  "This string has a length prop",
  ["This", "arr", "has", "length"],
  { material: "plastic", length: 30 },
];

logLengths(arr);
// 29
// 4
// 30
/* Generics are an awesome feature of TypeScript! */
