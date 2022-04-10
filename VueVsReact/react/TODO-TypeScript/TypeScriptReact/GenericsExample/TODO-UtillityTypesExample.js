// TypeScript Utility Types Part 1: Partial, Pick, and Omit
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Example with typescript using pick and omit utility types to create a type that only includes the properties of the object passed in as the first argument.
// Example with using TypeScript partials to create a type that is a subset of another type.
// Generics with TypeScript
// in this example we are using generics to create a type that is a subset of another type.
// The idea is that we want to insert a number into the beggining of the array
// The problem is that if we type our array in our function as a number[] we will not have a generic function here.
function insertAtBegginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
//here demoArray is any type because we are not specifying the type of the array.
var demoArray = [1, 2, 3, 4, 5];
// here updatedArray is any type because we are not specifying the type of the array.
var updatedArray = insertAtBegginning(demoArray, -1);
console.log(updatedArray);
// If we tried to call split we could do it be we would get a runtime error because the array is not typed to include numbers
updatedArray[0].split("");
// If we tried to do updatedArray.push(6) we would get an error because we are trying to push a number into a number array.
// We can use generics to fix this problem.
// TS doesnt know the first value of updated array is a number.
// Solution:
// Converting insertAtbegginning to a generic function
// A T is a type parameter that we can use to specify the type of the array.
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
//here DemoArray is a number array because we are specifying the type of the array via generics
var demoArrayGeneric = [1, 2, 3, 4, 5];
var updatedArrayGeneric = insertAtBegginning(demoArrayGeneric, -1);
console.log(updatedArrayGeneric);
// If we tried to call split we could do it be we would get a runtime error because the array is not typed to include numbers
// Gives error because it knows demoArrayGeneric is not including strings now.
demoArrayGeneric[0].split("");
updatedArrayGeneric[0].split("");
