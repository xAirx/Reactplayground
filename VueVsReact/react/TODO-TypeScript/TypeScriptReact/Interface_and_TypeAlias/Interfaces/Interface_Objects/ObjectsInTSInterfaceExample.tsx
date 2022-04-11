Objects in TypeScript
Objects in TypeScript must have all the correct properties and value types:

// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolean


person = {
  name: 'John',
  location: 'US',
};
// ERROR: missing the isProgrammer property
/* When defining the signature of an object, you will usually use an interface. This is useful if we need to check that multiple objects have the same specific properties and value types:
 */
interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

let person2: Person = {
  name: 'Sarah',
  location: 'Germany',
  isProgrammer: false,
};
