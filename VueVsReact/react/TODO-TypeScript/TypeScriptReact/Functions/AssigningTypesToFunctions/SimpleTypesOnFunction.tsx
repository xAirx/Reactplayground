/* Assigning types to functions

We can add type annotations to function parameters as well as to its return value.

The syntax for a type annotation on a parameter is just like type annotations on variables - a colon followed by the type is added after the parameter name.

For example:
 */

function add(a: number, b: number) {
  return a + b;
}

/* In the above add function, both the a and b parameters are of type number.

We can also add a type annotation for the return value by adding a colon followed by the type after the function's parentheses. For example:

 */
function add(a: number, b: number): number {
  return a + b;
}

/* We have defined that the return value in the above add function is of type number.

Types can also be added to function expressions in the same way: */

const minus = function (a: number, b: number): number {
  return a - b;
};

/* Similarly, types can be added to arrow functions:
 */

const multiply = (a: number, b: number): number => a * b;

/* Paste the following JavaScript function into the code editor you have open:
 */
function divide(a, b) {
  return a / b;
}

/* Have a go at adding type annotations to the function parameters and also to the return value. */
