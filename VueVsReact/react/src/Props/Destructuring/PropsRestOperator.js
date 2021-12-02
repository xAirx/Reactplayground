/* The Rest Operator (…), three dots, in ES6 comes with some caveats:

you can use the rest operator at most once
the rest operator must appear at the end

What does the rest operator (…) do? It copies all remaining properties of the destructuring source into its operand,
without the ones that were already mentioned in the object literal.

Let’s have a look at a rest operator example working with Object Destructuring:
*/

const obj = { elem1: 1, elem2: 2, elem3: 3 };

const { elem1, ...rest } = obj;

console.log(elem1);
//    1

console.log(rest);
//    { elem2: 2, elem3: 3 }

/* It does not matter the order, for example you can extract any property of the object, and the remaining ones will be put in the rest object, for example:
 */

const obj = { elem1: 1, elem2: 2, elem3: 3 };

const { elem3, ...rest } = obj;

console.log(elem3);
//    3

console.log(rest);
//    { elem1: 1, elem2: 2 }

/* Nesting is permitted, and this way you can use the rest operator multiple times:
 */

const obj = {
  elem1: 1,
  elem2: 2,
  elem3: 3,
  newObj: {
    elem4: 4,
    elem5: 5,
    elem6: 6,
  },
};
const {
  elem2,
  newObj: { elem5, ...rest1 },
  ...rest2
} = obj;
console.log(elem2);
//    2
console.log(elem5);
//    5
console.log(rest1);
//  { elem4: 4, elem6: 6 }
console.log(rest2);
//  { elem1: 1, elem3: 3 }
