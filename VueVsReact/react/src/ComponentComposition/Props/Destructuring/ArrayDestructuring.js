/*
Destructuring in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literals.

It creates a pattern that describes the kind of value you are expecting and makes the assignment. Array destructuring uses position.

Destructuring has made extracting data from an array very simple and readable.Imagine trying to extract data from a nested array with 5 or 6 levels.That would be very tedious.You use an array literal on the left - hand side of the assignment.
 */

/* In fact, the useState hook from React returns an array with two values that we destructure immediately. Here’s an illustration of how it works:
 */
const [name, setName] = useState("name");

function useState(defaultValue) {
  // executing React state mechanism..
  return [value, updateFunction];
}

var thing = ["Table", "Chair", "Fan"];
var [a, b, c] = thing;

/* Declaration and assignment can be done separatel
in destructuring.
 */
var first, second;
[first, second] = ["Male", "Female"];

/* If the number of variables passed to the destructuring array literals are more than the elements in the array, then the variables which aren’t mapped to any element in the array return undefined.
 */
var things = ["Table", "Chair", "Fan", "Rug"];
var [a, b, c, d, e] = things;
console.log(c); //Output: Fan
console.log(d); //Output: Rug
console.log(e); //Output: undefined

/* If the number of variables passed to the destructuring array literals are lesser than the elements in the array, the elements without variables to be mapped to are just left. There are no errors whatsoever.
 */

var things = ["Table", "Chair", "Fan", "Rug"];
var [a, b, c] = things;
console.log(c); // Output: Fan
/*
Declaration and assignment can be done separately in destructuring.
 */
var first, second;
[first, second] = ["Male", "Female"];

/* If the number of variables passed to the destructuring array literals are more than the elements in the array, then the variables which aren’t mapped to any element in the array return undefined.
 */
var things = ["Table", "Chair", "Fan", "Rug"];
var [a, b, c, d, e] = things;
console.log(c); //Output: Fan
console.log(d); //Output: Rug
console.log(e); //Output: undefined

/* If the number of variables passed to the destructuring array literals are lesser than the elements in the array, the elements without variables to be mapped to are just left. There are no errors whatsoever.
 */

var things = ["Table", "Chair", "Fan", "Rug"];
var [a, b, c] = things;
console.log(c); // Output: Fan

/* Destructuring Returned Arrays

Destructuring makes working with a function that returns an array as a value more precise. It works for all iterables.
 */

function runners() {
  return ["Sandra", "Ola", "Chi"];
}

var [a, b, c] = runners();
console.log(a); //Output: Sandra
console.log(b); //Output: Ola
console.log(c); //Output: Chi

/*
Nested Array Destructuring

You can also do nested destructuring with arrays. The corresponding item must be an array in order to use a nested destructuring array literal to assign items in it to local variables.
 */
var numbers = [8, [1, 2, 3], 10, 12];
var [a, [d, e, f]] = numbers;

console.log(a); // Output: 8
console.log(d); // Output: 1
console.log(e); // Output: 2

/* Multiple Array Destructuring

You can destructure an array more than once in the same code snippet.
 */
var places = ["first", "second", "third", "fourth"];
var [a, b, , d] = ([f, ...rest] = places);

console.log(a); //Output: first
console.log(d); //Output: fourth
console.log(f); //Output: first
console.log(rest); //Output: ["second", "third", "fourth"]
