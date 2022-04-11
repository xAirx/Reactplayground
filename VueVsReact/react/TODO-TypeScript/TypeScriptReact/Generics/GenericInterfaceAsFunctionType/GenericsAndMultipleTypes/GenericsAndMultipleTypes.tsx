/* Multiple Type Variables
We can specify multiple type variables with different names as shown below. */

Example: Multiple Type Variables Copy
function displayType<T, U>(id:T, name:U): void {
  console.log(typeof(id) + ", " + typeof(name));
}

displayType<number, string>(1, "Steve"); // number, string


/* Generic type can also be used with other non-generic types. */
/*
Example: Generic with Non-generic Type Copy */

function displayType<T>(id:T, name:string): void {
  console.log(typeof(id) + ", " + typeof(name));
}

displayType<number>(1, "Steve"); // number, string