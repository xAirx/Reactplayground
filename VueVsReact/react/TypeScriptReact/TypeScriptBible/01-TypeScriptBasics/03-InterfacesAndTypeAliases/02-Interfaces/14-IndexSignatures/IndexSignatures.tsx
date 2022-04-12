/* If you don't know the names of all of the properties in the object ahead of time, use an index signature in your interface.
 */

index.ts;

interface Employee {
  id: number;
  name: string;
  [key: string]: any; // 👈️ index signature
}

const arr: Employee[] = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Jeff", salary: 100 },
];

arr.push({ id: 3, name: "Adam", dept: "accounting" });

/* An index signature is used when we don't know all the names of a type's properties and the shape of their values ahead of time.

The index signature in the example means that when an the object is indexed with a string, it will return a value of any type.
You might also see the index signature {[key: string]: string} in examples.

It represents a key-value structure that when indexed with a string returns a value of type string.

Now we know that every element in the array will have an id property of type number, a name property of type string,
but it can also have other properties where the key is a string and the value could be of any type.

When using this approach, you should always explicitly add all of the properties to the interface that you know about in advance.

It's best to minimize your use of any, so we can leverage the type checker as much as possible. */
