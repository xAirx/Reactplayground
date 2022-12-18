/* The Rest Operator (…), three dots, in ES6 comes with some caveats:


/* The Rest Parameter And Spread Syntax

The new (…) operator that was added in ES6 can
be used in destructuring.If the(…) operator
appear on the left - hand side in destructuring
 then it is a REST PARAMETER.A Rest parameter
 is used to map all the remaining elements in the
  array that have not been mapped to the rest
  variable itself.It is like gathering what is left
behind.The Rest variable must always be the last
 otherwise a SyntaxError is thrown. */

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, , third, ...others] = planets;

console.log(first); //Output: Mercury
console.log(third); //Output: Venus
console.log(others); //Output: ["Mars", "Pluto", "Saturn"]

// more examples

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
