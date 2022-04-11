/* Typed arrow functions
Let’s now turn to typed arrow functions, and how to create them. The syntax for adding types to arrow functions is very similar to that of normal functions.

I’m going to refactor our last function into an arrow function and apply type guards to it: */

interface Attribute {
  age: number;
  sentence: string;
}

const personality = (attribute: Attribute): string => {
  return `${attribute.sentence} ${attribute.age}`;
};

const attribute: Attribute = {
  age: 18,
  sentence: "My age is",
};

const getPersonality = personality(attribute);

/* The same rules that apply to normal functions also apply to arrow functions. */
