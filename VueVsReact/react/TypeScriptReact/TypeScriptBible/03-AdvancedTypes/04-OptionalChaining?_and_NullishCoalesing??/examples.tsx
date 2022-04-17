/*
Hvad er ? i typescript
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining


Optional chaining allows developers to author code where some expressions can immediately stop running with a null or undefined condition through the new ?. operator for optional property access.

For example, before optional chaining JavaScript or TypeScript code would look like this:
 */
let x = (foo === null || foo === undefined) ? undefined : foo.bar();
if (foo && foo.bar && foo.bar.baz) { // ... }

/* With optional chaining, this gets replaced by:
 */
let x = foo?.bar();
if (foo?.bar?.baz) { // ... }


/* The new ?. operator is slightly different than the && operation checks as the optional chaining operator treats valid data such as 0 or empty strings as truthy.

The same operator can also be used on arrays for optional element access if the array exists, and on function calls to call them if the function is not null or undefined.
 */
return arr?.[0]; log?.(`Request started at ${new Date().toISOString()}`);



double ?? i typescript
https://www.angularjswiki.com/angular/double-question-marks-or-nullish-coalescing-operator-in-angular-typescript/



/* The TypeScript team also championed the new ECMAScript nullish coalescing operator, ?? . This new operator provides a falling back to a default value when dealing with null or undefined.

The ?? operator replaces the use of || when providing an optional default value. */

let x = foo ?? bar();
