/* What is the `keyof` type operator?
In TypeScript 2.1, they introduced the keyof type operator.
The keyof type operator takes an object type and creates a union type of its keys.
For example, let’s say we have a User type created with a name as a string and age as a number. */

type User2 = {
  name: string;
  age: number;
};

/* We can create a union type of the keys of the User type using the keyof type operator. */

type UserKey1 = keyof User2;

/* Now, the UserKey type will have a type of "name" | "age". */

/*
Of course, we could have hardcoded UserKey as a union type of "name" | "age".

However, if we want to add more properties to the User type in the future, we would also have to update the UserKey type.

By using keyof, the UserKey union type will also be changed if we add a new property to User.

For example, I added a location property as a string on the User type.

*/

type User3 = {
  name: string;
  age: number;
  location: string;
};

/* We can create a union type of the keys of the User type using the keyof type operator. */

type UserKey2 = keyof User3;

/* Now the UserKey type becomes a union type of "name" | "age" | "location".  */
