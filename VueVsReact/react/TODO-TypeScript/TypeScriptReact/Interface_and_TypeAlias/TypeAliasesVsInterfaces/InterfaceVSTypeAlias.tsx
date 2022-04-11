
/* Interfaces are very similar to type aliases, and in many cases you can use either.

The key distinction is that type aliases cannot be reopened to add new properties, vs an interface which is always extendable.

 */


Adding new fields to an existing interface:

interface Animal {
  name: string
}

// Re-opening the Animal interface to add a new field
interface Animal {
  tail: boolean
}

const dog: Animal = {
  name: "Bruce",
  tail: true,
}

/* Here's the key difference: a type cannot be changed after being created:
 */

type Animal = {
  name: string
}

type Animal = {
  tail: boolean
}
// ERROR: Duplicate identifier 'Animal'.
/* As a rule of thumb, the TypeScript docs recommend using interfaces to define objects, until you need to use the features of a type.
 */

/* Interfaces can also define function signatures:
 */

interface Person {
  name: string
  age: number
  speak(sentence: string): void
}

const person1: Person = {
  name: "John",
  age: 48,
  speak: sentence => console.log(sentence),
}
