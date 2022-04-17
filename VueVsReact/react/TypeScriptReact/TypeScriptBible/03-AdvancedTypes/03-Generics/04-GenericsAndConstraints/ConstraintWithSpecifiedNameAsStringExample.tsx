/* We could solve this by saying that the object argument should have a name property with string value: */

const addID = <T extends { name: string }>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person2 = addID(["Sally", 26]); // ERROR: argument should have a name property with string value

/* The type can also be passed in to < T >, as below – but this isn't necessary most of the time, as TypeScript will infer it. */

// Below, we have explicitly stated what type the argument should be between the angle brackets.

let person1 = addID<{ name: string; age: number }>({ name: "John", age: 40 });

/* Generics allow you to have type - safety in components where the arguments and return types are unknown ahead of time.

  In TypeScript, generics are used when we want to describe a correspondence between two values.

  In the above example, the return type was related to the input type.We used a generic to describe the correspondence.
   */
