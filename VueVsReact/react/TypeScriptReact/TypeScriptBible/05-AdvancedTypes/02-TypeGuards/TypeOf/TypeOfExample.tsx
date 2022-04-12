/* typeof

https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/

Let’s take a look at the following example: */

/* First, define the alphanumeric type that can hold either a string or a number. */

/* In this example, TypeScript knows the usage of the typeof operator in the conditional blocks. */

type alphanumeric = string | number;

/* Next, declare a function that adds two variables a and b with the type of alphanumeric. */

function add(a: alphanumeric, b: alphanumeric) {
  /* Then, check if both types of arguments are numbers using the typeof operator.

If yes, then calculate the sum of arguments using the + operator. */

  /* Inside the following if block, TypeScript realizes that a and b are numbers. */

  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  /* After that, check if both types of arguments are strings using the typeof operator.

If yes, then concatenate two arguments. */

  /* Similarly, in the following if block, TypeScript treats a and b as strings, therefore, you can concatenate them into one:
   */

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  /* Finally, throw an error if arguments are neither numbers nor strings. */
  /* */

  throw new Error(
    "Invalid arguments. Both arguments must be either numbers or strings."
  );
}
