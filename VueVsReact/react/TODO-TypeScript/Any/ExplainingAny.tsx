/* Any

In some situations, not all type information is available or it’s declaration would take an inappropriate amount of effort.

These may occur for values from code that has been written without TypeScript or a 3rd party library.

In these cases, we might want to opt-out of type checking.

To do so, we label these values with the any type: */

declare function getValue(key: string): any;

// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");



/* The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.

Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.

These properties include functions and TypeScript will not check their existence or type: */

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
let strictlyTyped: unknown = 4;
strictlyTyped.toFixed();
Object is of type 'unknown'.

/* The any will continue to propagate through your objects:
 */
let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;
//  ^ = let d: any

/* After all, remember that all the convenience of any comes at the cost of losing type safety.

Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.
 */