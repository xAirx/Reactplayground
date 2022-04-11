/* TypeScript Function Types

define types for functions.

Introduction to TypeScript function type

A function type has two parts:

parameters and return type.

When you declare a function type, you need to specify both of these parts with the following syntax: */

(parameter: type, parameter:type,...) => type

/* The following example shows how to declare a variable which has a function type that accepts two numbers and returns a number:
 */
let add: (x: number, y: number) => number;

/* In this example:

	• The function type accepts two arguments: x and y , which have the number types.

	• The type of the return value of a function type is the number type that follows the fat arrow (=>) appeared between parameters and return type.

Note that the parameter names are just for readability.

As long as the parameter types match, it is a valid type for the function regardless of the names of the parameters in the function type.

Once you assign a function type to a variable, you can assign the variable to the function that has same the function type.
 */


/*Inferring function types

TypeScript compiler can figure out the function type when you have the type on one side of the equation. This is a form of type inference is called contextual typing. For example:


In this example, the add function will take the type (x: number, y:number) => number.
By leveraging the type inference, you can significantly reduce the amount of code that keeps your program strong typed.

https://www.typescripttutorial.net/typescript-tutorial/typescript-function-types/ */