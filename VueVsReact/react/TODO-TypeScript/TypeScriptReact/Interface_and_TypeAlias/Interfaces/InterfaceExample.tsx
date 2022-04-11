/* Interfaces in TypeScript
Interfaces define how an object should look: */

interface Person {
  name: string;
  age: number;
}

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: "John",
  age: 48,
}); // Hi John

/* You can also define an object type using a type alias:
 */

type Person = {
  name: string;
  age: number;
};

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: "John",
  age: 48,
}); // Hi John

/* Or an object type could be defined anonymously:
 */

function sayHi(person: { name: string; age: number }) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: "John",
  age: 48,
}); // Hi John
