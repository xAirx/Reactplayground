/* Generics with interfaces
 */
// An interface defines how an object should look like.
// so if an object implements our resource interface.
// it must have the below properties defined below with the types below.

// we want to make these types generic
// What if our data isnt a string, or a number?
// Implementing the generic here, we say that data will be of any type we specify when we create
// this resource interface.
interface Resource1<T> {
  uid: number;
  resourceName: string;
  data: T;
}

/// ///// EXAMPLE ///////
interface Resource2 {
  uid: number;
  resourceName: string;
  data: object;
}

// here we give the doc3 the type of the Resource interface
// The resource interface defines the structure of our object
const doc3: Resource2 = {
  uid: 1,
  resourceName: "person",
  data: { name: "shawn" }, // works
  data2: "shawn", // ERROR data has to be an object as per the interface.
};
console.log(doc3);

/// /////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////

/// Fixing this problem with the generic.
/// We will define our generic as a string. // its saying okay well, pass in the string, as T and data must be of that type string.

const doc4: Resource1<string> = {
  uid: 1,
  resourceName: "person",
  /* data: { name: 'shawn' }, // works */
  data5: "shawn", /// NOW THIS WORKS BECAUSE OF OUR GENERIC TYPE SET TO STRING.
  data6: "shawn", // ERROR data has to be an STRING as per the generic interface.
};
console.log(doc4);

/// /////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////

const doc5: Resource1<object> = {
  uid: 1,
  resourceName: "person",
  /* data: { name: 'shawn' }, // works */
  data7: "shawn", /// ERROR data has to be an OBJECt as per the generic interface.
  data8: "shawn", // WORKS AS WE ARE PASSING OBJECT AS T INTO OUR GENERIC.
};
console.log(doc4);

/// /////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////
/// ///////////ANOTHER EXAMPLE //////////////
const doc6: Resource1<String[]> = {
  uid: 2,
  resourceName: "ShoppingList",
  data9: "string",
  data10: ["test", "bread", " milk"],
};

console.log(doc6);
