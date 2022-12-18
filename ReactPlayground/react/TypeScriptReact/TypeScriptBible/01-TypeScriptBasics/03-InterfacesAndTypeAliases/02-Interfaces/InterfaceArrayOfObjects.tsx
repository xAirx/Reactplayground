/* Define an Interface for Array of Objects in TypeScript #
To define an interface for an array of objects, define the interface for the type of each object and set the type of the array to be Type[], e.g. const arr: Employee[] = []. All of the objects you add to the array have to conform to the type, otherwise the type checker errors out.
 */

//index.ts
// ✅ All objects have predefined type
interface Employee {
  id: number;
  name: string;
}

const arr1: Employee[] = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Jeff' },
];

// ✅ Objects with extendable type
interface Extendable {
  id: number;
  name: string;
}

const arr2: Extendable[] = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Jeff', salary: 1000 },
    //<-- throw error
];


/* In the first example, we defined the type for an array of objects using an interface.

Each object has an id property of type number and a name property of type string.

Trying to add an object of different type to the array causes the type checker to throw an error.
 */

//index.ts
interface Employee {
  id: number;
  name: string;
}

const arr3: Employee[] = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Jeff' },
];

// ⛔️ Error: Argument of type '{ salary: number; }'
// is not assignable to parameter of type 'Employee'.

arr3.push({ salary: 100 });

//This approach is very useful when you have to initialize the array as empty.
//If you initialize an empty array, TypeScript assumes its type to be any[].

//index.ts
// 👇️ const arr: any[]
const arr = [];

/* This means that you could add elements of any type to the array and you'd get no help from the type checker.

Instead, you should explicitly type all empty arrays. */

index.ts
interface Employee {
  id: number;
  name: string;
}

const arr: Employee[] = [];

/* Now, you can only add objects that conform to the Employee type to the arr array.
