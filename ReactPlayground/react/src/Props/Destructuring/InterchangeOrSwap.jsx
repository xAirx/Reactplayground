/* Interchanging Or Swapping Variables

One destructuring expression can be used in swapping the values of two variables.
 */

var a, b;
[a, b] = ["Male", "Female"];
[a, b] = [b, a];

console.log(a); //Output: Female
console.log(b); //Output: Male
