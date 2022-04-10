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
This means that you could add elements of any type to the array and you'd get no help from the type checker.

Instead, you should explicitly type all empty arrays.

index.ts
interface Employee {
  id: number;
  name: string;
}

const arr: Employee[] = [];
Now, you can only add objects that conform to the Employee type to the arr array.

If you don't know the names of all of the properties in the object ahead of time, use an index signature in your interface.

index.ts
interface Employee {
  id: number;
  name: string;
  [key: string]: any; // 👈️ index signature
}

const arr: Employee[] = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Jeff', salary: 100 },
];

arr.push({ id: 3, name: 'Adam', dept: 'accounting' });
An index signature is used when we don't know all the names of a type's properties and the shape of their values ahead of time.

The index signature in the example means that when an the object is indexed with a string, it will return a value of any type.
You might also see the index signature {[key: string]: string} in examples. It represents a key-value structure that when indexed with a string returns a value of type string.

Now we know that every element in the array will have an id property of type number, a name property of type string, but it can also have other properties where the key is a string and the value could be of any type.

When using this approach, you should always explicitly add all of the properties to the interface that you know about in advance.

It's best to minimize your use of any, so we can leverage the type checker as much as possible.