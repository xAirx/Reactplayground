/* Record<K,V>
Generic types can have multiple parameters. Let's explore an example:

 */
type Result = {
  firstName: string;
  surname: string;
  score: number;
};

type ResultRecord = Record<string, Result>;


/* The Record generic type allows a key-value object type to be created.

We have used this to create a ResultRecord type where the key is any string, and the value is of type Result.

Let's use our ResultRecord type to create some records: */



const records: ResultRecord = {
  rodj: {
    firstName: "Rod",
    surname: "James",
    score: 70,
  },
  janes: {
    firstName: "Jane",
    surname: "Smith",
    score: 95,
  },
  fredp: {
    firstName: "Fred",
    surname: "Peters",
    score: 60,
  },
};
console.log(records);


/* In the example above, rodj, janes, and fredp are the keys, and the values all have the Result type.


How can we narrow the type of the record keys so that only 'rodj', 'janes' or 'fredp' are accepted? Make the change in our code.

 */
💡


type ResultRecord = Record<"rodj" | "janes" | "fredp",Result>;
Let's add another record to our records object:

const records: ResultRecord = {
  ...,
  bobk: {
    firstName: "Bob",
    surname: "Keel",
    score: 65
  }
}

/* Is a type error raised? */


/* Yes, because 'bob' is outside the type for the record key */