/* We may need to describe the type of variables that we do not know when we are writing an application.

These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API.

In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.
 */
let notSure: unknown = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean

notSure = false;

/* If you have a variable with an unknown type, you can narrow it to something more specific by doing typeof checks, comparison checks, or more advanced type guards that will be discussed in a later chapter:
 */
declare const maybe: unknown;

// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe;
/* Type 'unknown' is not assignable to type 'number'.
 */

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  const aString: string = maybe;
/* Type 'boolean' is not assignable to type 'string'.
 */
}


if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe;
/* Type 'string' is not assignable to type 'boolean'.
 */