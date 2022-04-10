/* Literal types in TypeScript
In addition to the general types string and number, we can refer to specific strings and numbers in type positions:
 */

// Union type with a literal type in each position
let favouriteColor: "red" | "blue" | "green" | "yellow";

favouriteColor = "blue";
favouriteColor = "crimson"; // ERROR: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'.
