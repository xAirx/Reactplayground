// TypeScript Utility Types Part 1: Partial, Pick, and Omit

// Example with typescript using pick and omit utility types to create a type that only includes the properties of the object passed in as the first argument.

// Example with using TypeScript partials to create a type that is a subset of another type.

// Generics with TypeScript

// in this example we are using generics to create a type that is a subset of another type.
// The idea is that we want to insert a number into the beggining of the array
// The problem is that if we type our array in our function as a number[] we will not have a generic function here.

function insertAtBegginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
//here demoArray is any type because we are not specifying the type of the array.
const demoArray = [1, 2, 3, 4, 5];
// here updatedArray is any type because we are not specifying the type of the array.
const updatedArray = insertAtBegginning(demoArray, -1);
console.log(updatedArray);

// If we tried to call split we could do it be we would get a runtime error because the array is not typed to include numbers
updatedArray[0].split("");

// If we tried to do updatedArray.push(6) we would get an error because we are trying to push a number into a number array.
// We can use generics to fix this problem.
// TS doesnt know the first value of updated array is a number.

// Solution:

// Converting insertAtbegginning to a generic function
// A T is a type parameter that we can use to specify the type of the array.
function insertAtBeginning<T>(array: T[], value: T) {
  // Using generics the array below "newArray" is specified via inference to be of type T[]
  const newArray = [value, ...array];
  return newArray;
}
//here DemoArray is a number array because we are specifying the type of the array via generics
const demoArrayGeneric = [1, 2, 3, 4, 5];

const updatedArrayGeneric = insertAtBegginning(demoArrayGeneric, -1);
const stringArray = insertAtBeginning(demoArrayGeneric, -1);
console.log(updatedArrayGeneric);

// If we tried to call split we could do it be we would get a runtime error because the array is not typed to include numbers
// Gives error because it knows demoArrayGeneric is not including strings now.
demoArrayGeneric[0].split("");

const stringArray2 = insertAtBeginning<string>(["a", "b", "c"], "d");
const stringArray2 = insertAtBeginning(["a", "b", "c"], "d");
const stringArray2 = insertAtBeginning<number>(["a", "b", "c"], "d");
const stringArray2 = insertAtBeginning<number>([1, 2, 3], 0);

/*  So we can not just use the angle brackets to define a generic type but also to USE a generic type and
            explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is
            not able to infer the(correct) type.We'll see this later in this course section! */


/* Understanding TypeScript Generics


A Closer Look At Generics

Generic Types ("Generics") can be tricky to wrap your head around.

But indeed, we are working with them all the time - one of the most prominent examples is an array.

Consider this example array: */

let numbers = [1, 2, 3];

/* Here, the type is inferred, but if we would assign it explicitly, we could do it like this: */

////////////////////// USING THE GENERIC TYPE PLACEHOLDE OVERRIDING <T/>/////////////////////////////////
// You could also write the above example liks this:

let numbers3: Array<number> = [1, 2, 3];
/*
Here we have the angle brackets(<>) again! But this time NOT to create our own type
    (as we did it in the previous lecture) but instead to tell TypeScript which actual
    type should be used for the "generic type placeholder" (T in the previous lecture).

    Just as shown in the last lecture, TypeScript would be
    able to infer this as well - we rely on that when we just write: */

let numbers4 = [1, 2, 3];

/* But if we want to explicitly set a type, we could do it like this: */

let numbers5: Array<number> = [1, 2, 3];

/*  Of course it can be a bit annoying to write this rather long and clunky type,
        that's why we have this alternative (syntactic sugar) for arrays: */

////////////////////////// TYPING ARRY WITH SYNTACTIC SUGAR //////////////////////////////////////////////

let numbers2: number[] = [1, 2, 3];

/* number[] is the TypeScript notation for saying "this is an array of numbers".

But actually, number[] is just syntactic sugar!

The actual type is Array. ALL arrays are of the Array type.

    BUT: Since an array type really only makes sense if we also describe the
    type of items in the array, Array actually is a generic type.
