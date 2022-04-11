/* Null and Undefined

In TypeScript, both undefined and null actually have their own types named undefined and null respectively.

 Much like void, they’re not extremely useful on their own:
 */
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/* By default null and undefined are subtypes of all other types.

That means you can assign null and undefined to something like number.

However, when using the --strictNullChecks flag, null and undefined are only assignable to unknown, any and their respective types (the one exception being that undefined is also assignable to void). */

/*
----------------------------------------------------------------------------------------------------------------

This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined.


As a note: we encourage the use of --strictNullChecks when possible, but for the purposes of this handbook, we will assume it is turned off.
 */


/* Undefined & null as a value
Undefined

https://www.tektutorialshub.com/typescript/typescript-null-undefined-strict-null-checks/ */

/* The Undefined means a variable has been declared but has not yet been assigned a value. The undefined variables do not have any value.


 It is an unintentional absence of any value. Whenever we declare a variable without initializing it with a value, TypeScript initializes it as undefined.

The following example declares the variable num. We have not given it any initial value. By default it gets the value undefined. */


let num:number;
console.log(num);         //undefined


/* We can also assign undefined value variables of any other types (except never) */
let num:number;
num=10;
console.log(num);         //10
num=undefined
console.log(num);         //undefined



/* Undefined & null as a value
Undefined

The Undefined means a variable has been declared but has not yet been assigned a value. The undefined variables do not have any value.

It is an unintentional absence of any value. Whenever we declare a variable without initializing it with a value, TypeScript initializes it as undefined.

The following example declares the variable num. We have not given it any initial value. By default it gets the value undefined. */

let num:number;
console.log(num);         //undefined

/* We can also assign undefined value variables of any other types (except never)
 */

let num:number;
num=10;
console.log(num);         //10
num=undefined
console.log(num);         //undefined



/* Undefined & null as a Type

The Undefined & null also has corresponding types named after them.

Undefined

We can create a variable as undefined just like any other variable declaration.
The only values that you can assign to them are undefined and null. Any other values like string, object, numbers, etc are not allowed.
 */
let uVar: undefined;
//Allowed
uVar=undefined;
uVar=null;
//Not Allowed
uVar=10;          //type '10' is not assignable to type 'undefined'
	uVar={}           //Type '{}' is not assignable to type 'undefined'


let num:number;
console.log(num);         //undefined
console.log(typeof num);  //undefined
let uVar: undefined;
console.log(uVar);         //undefined
console.log(typeof uVar);  //undefined

Also the typeof returns the type as undefined.

Null

/* Similarly, you can create a variable as null. Defining a variable as of type null does not give it a value of null, but it gets the default value of undefined. (Like all other TypeScript variables). We must assign the value null to it. */

let nVar: null;
console.log(nVar)       //undefined
nVar=null;
console.log(nVar)       //null

/* The only values that you can assign to it is undefined & null. */

let nVar: null;
//Allowed
nVar=undefined;
nVar=null;
//Not Allowed
nVar=10;          //type '10' is not assignable to type 'null'
nVar={}           //Type '{}' is not assignable to type 'null'

/* The typeof returns the type as object and not as null.

This is a bug in JavaScript. */
let num:number;
num=null                  //Assigning null to a number variable
console.log(num);         //null
console.log(typeof num);  //object
let nVar: null;
nVar=null                  //Assigning null to a null variable
console.log(nVar);         //null
	console.log(typeof nVar);  //object
