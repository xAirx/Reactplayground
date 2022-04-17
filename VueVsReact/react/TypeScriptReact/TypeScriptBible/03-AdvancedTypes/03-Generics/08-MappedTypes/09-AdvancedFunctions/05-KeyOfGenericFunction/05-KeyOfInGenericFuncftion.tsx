/* Use `keyof` in a generic function
Now that we understand what the keyof type operator does, let’s take a look at how we can use this in a generic function.
For this example, I will create an array of users, each with a User type. */

//blog.devgenius.io/how-to-use-the-keyof-type-operator-in-typescript-6d5e0ea6740f

https: type User1 = {
  name: string;
  age: number;
  location: string;
};

const users: User1[] = [
  {
    name: "Chad",
    age: 31,
    location: "Japan",
  },
  {
    name: "Bob",
    age: 29,
    location: "USA",
  },
  {
    name: "Jane",
    age: 30,
    location: "France",
  },
];

/* Then I will create a generic function called getData. */

/* This may look more complicated than it actually is, so let me break it down. */

/*First, we will pass in two type variables to this generic function:
Type and KeyType.*/

/*Type will be the type of items in the array.
KeyType will extend keyof Type. In other words, it will be a key of Type.*/
function getData<Type, KeyType extends keyof Type>(
  /* The function itself will take two arguments:
  dataList — an array of items of Type
  dataType — a specific key of Type
 */
  dataList: Type[],
  dataType: KeyType
  /* The return type of this function will be Type[KeyType][]. This means it will be an array of the KeyType property of each item. */
): Type[KeyType][] {
  /* Finally, we will add the logic of the function. This function will simply map over the data list array and return the value of the property we specified.
   */
  // Mapping Types(users) // getting the dataType from KeyType that extends keyOf Type
  // The keyOfType is in this case the dataType
  return dataList.map((data) => data[dataType]);
}

/* If I call the function and pass in the users array as the first argument, you can see my text editor is suggesting values for the second argument.
This is because TypeScript knows the second argument must be a key of the User type. So either age, location, or name. */

//getData(users, ""); // Typing this will give autocompletion with age,location,name.

getData(users, "age"); // will show all ages in console
console.log(getData(users, "age")); // will show all names in console)
getData(users, "name"); // will show all names in console
console.log(getData(users, "name")); // will show all names in console)
getData(users, "location"); // will show all locations in console
console.log(getData(users, "location")); // will show all names in console)
