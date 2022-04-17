/* When we passed in a string, TypeScript saw no issue.

It only reported an error when we tried to access the name property.

So, we need a constraint: we need to tell TypeScript that only objects should be accepted, by making our generic type, T, an extension of object: */

const addID3 = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person5 = addID3({ name: "John", age: 40 });
let person6 = addID3("Sally"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'object'.

/* The error is caught straight away – perfect...well, not quite.

In JavaScript, arrays are objects, so we can still get away with passing in an array: */

let person2 = addID(["Sally", 26]); // Pass in an array - no problem

console.log(person2.id); // 824
console.log(person2.name); // Error: Property 'name' does not exist on type '(string | number)[] & { id: number; }'.

////////// Array Example

interface Person {
  name: string;
  age: number;
}

const addID4 = <T extends Array<Person>>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person7 = addID4([{ name: "John", age: 40 }]); // Pass in an array - no problem
let person8 = addID4("Sally"); // ERROR: Argument of type 'string' is not assignable to parameter of type Person[]

/* The error is caught straight away – perfect...well, not quite.

In JavaScript, arrays are objects, so we can still get away with passing in an array: */

console.log(person7.id); // 824
console.log(person8.name); // Property 'name' does not exist on type 'Person[] & { id: number; }'.
console.log(person8[1].name); // WORKS



////////// Example 2



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
