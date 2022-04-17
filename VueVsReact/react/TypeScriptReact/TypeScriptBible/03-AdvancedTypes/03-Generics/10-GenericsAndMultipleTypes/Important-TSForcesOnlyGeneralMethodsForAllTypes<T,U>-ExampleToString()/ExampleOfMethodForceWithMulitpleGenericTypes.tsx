/* Methods and Properties of Generic Type
When using type variables to create generic components, TypeScript forces us to use only general methods which are available for every type.
*/

/* Example: Generic Type Methods and Properties  */

function displayType<T, U>(id: T, name: U): void {
  id.toString(); // OK
  name.toString(); // OK

  id.toFixed(); // Compiler Error: 'toFixed' does not exists on type 'T'
  name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'

  console.log(typeof id + ", " + typeof name);
}
/* In the above example, id.toString() and name.toString() method calls are correct because the toString() method is available for all types. However, type specific methods such as toFixed() for number type or toUpperCase() for string type cannot be called. The compiler will give an error.

You can use array methods for the generic array. */

/* Example: Generic Array Methods

 */ function displayNames<T>(names: T[]): void {
  console.log(names.join(", "));
}

displayNames<string>(["Steve", "Bill"]); // Steve, Bill

/* So, be careful while using generic types and calling type specific methods or properties. */
