/* Default Value

Destructuring allows a default value to be assigned to a variable if no value or undefined is passed. It is like providing a fallback when nothing is found.
 */
var a, b;
[a = 40, b = 4] = [];
console.log(a); //Output: 40
console.log(b); //Output: 4

[a = 40, b = 4] = [1, 23];
console.log(a); //Output: 1
console.log(b); //Output: 23

/* Default values can also refer to other variables including the one in the same array literal.
 */
var [first = "Cotlin", second = first] = [];
console.log(first); //Output: Cotlin
console.log(second); //Output: Cotlin

var [first = "Cotlin", second = first] = ["Koku"];
console.log(first); //Output: Koku
console.log(second); //Output: Koku

var [first = "Cotlin", second = first] = ["Koku", "Lydia"];
console.log(first); //Output: Koku
console.log(second); //Output: Lydia
