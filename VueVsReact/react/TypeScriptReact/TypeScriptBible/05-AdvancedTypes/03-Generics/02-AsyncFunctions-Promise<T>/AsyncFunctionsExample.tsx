/* Asynchronous typed functions
Now that we have learned how to create normal and arrow functions, we are going to look at how to create asynchronous typed functions.
There’s a difference between typing asynchronous functions and normal functions: the return type of an async function must be the Promise<T> generic.

This generic represents the promise object being returned by the async function, where the <T> represents the type of the value to which the promise resolves.
Below is an example of a typed asynchronous function:
 */
interface Fruit {
  id: number;
  name: string;
}

const fruits: Fruit[] = [
  { id: 1, name: "apple" },
  { id: 2, name: "Orange" },
];

async function getFruitById(fruitId: number): Promise<Fruit | null> {
  const findFruit = fruits.find((fruit) => fruit.id === fruitId);
  if (!findFruit) return null;
  return findFruit;
}

async function runAsyncFunction() {
  const getFruit = await getFruitById(1);
}
/* In the above example, we created a fruit interface to handle the types for the params. We also created the getFruitById function, and set the return type to be the Promise generic with Fruit or null as the type of the return value. Finally, we had to wrap the getFruitById call into the runAsyncFunction, because we cannot use await in the top level of a file or we’ll get the the error below from the TypeScript compiler.

Fruit function error


Wrapping it in another async function fixes this error. */
