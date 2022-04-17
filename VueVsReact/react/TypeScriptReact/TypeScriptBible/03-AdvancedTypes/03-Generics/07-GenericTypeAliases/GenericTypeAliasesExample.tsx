/* (New name for type) Type Aliases

Type aliases create a new name for a type.

Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
 */
type Second = number;
let timeInSecond: number = 10;
let time: Second = 10;

/* Aliasing doesn’t actually create a new type - it creates a new name to refer to that type.

 Aliasing a primitive is not terribly useful, though it can be used as a form of documentation.


Just like interfaces, type aliases can also be generic - we can just add type parameters and use them on the right side of the alias declaration:
 */

type Container<T> = { value: T };

/*
We can also have a type alias refer to itself in a property: */

type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

/* Together with intersection types, we can make some pretty mind-bending types:
 */
type LinkedList<Type> = Type & { next: LinkedList<Type> };
interface Person {
  name: string;
}
let people = getDriversLicenseQueue();
people.name;
people.next.name;
people.next.next.name;
people.next.next.next.name;
//                  ^ = (property) next: LinkedListTry(
