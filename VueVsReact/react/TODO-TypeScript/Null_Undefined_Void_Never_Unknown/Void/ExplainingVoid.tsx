/* Void

void is a little like the opposite of any: the absence of having any type at all.

You may commonly see this as the return type of functions that do not return a value: */

function warnUser(): void {
  console.log("This is my warning message");
}

/* Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:
 */
let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;

/*

void in TypeScript #

void in TypeScript is a subtype of undefined.

Functions in JavaScript always return something.

Either it’s a value, or undefined: */

	function iHaveNoReturnValue(i) {
	console.log(i)
	} // returns undefined

/* Since functions without a return value always return undefined, and void always returns undefined in JavaScript, void in TypeScript is a proper type for telling developers that this function returns undefined:
 */

	declare function iHaveNoReturnValue(i: number): void


/* void as type can also be used for parameters and all other declarations. The only value that can be passed is undefined:
 */

	declare function iTakeNoParameters(x: void): void

	iTakeNoParameters() // 👍
	iTakeNoParameters(undefined) // 👍
	iTakeNoParameters(void 2) // 👍


/* So void and undefined are pretty much the same.


There’s one little difference though, and this difference is significant: void as a return type can be substituted with different types, to allow for advanced callback patterns: */


	function doSomething(callback: () => void) {
	// at this position, callback always returns undefined
	let c = callback()
	//c is also of type undefiend
	}

	// this function returns a number
	function aNumberCallback(): number {
	return 2;
	}

	// works 👍 type safety is ensured in doSometing
	doSomething(aNumberCallback)

/* This is desired behaviour and often used in JavaScript applications. Read more on this pattern called substitutability in my other articles.


If you want to make sure to pass functions who only return undefined (as in “nothing”), be sure to adapt your callback method signature: */


	- function doSomething(callback: () => void) {
	+ function doSomething(callback: () => undefined) { /* ... */ }

	function aNumberCallback(): number { return 2; }

	// 💥 types don't match
doSomething(aNumberCallback)