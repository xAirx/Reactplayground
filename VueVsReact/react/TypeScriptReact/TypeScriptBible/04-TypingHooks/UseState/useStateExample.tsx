/* Are you trying force a state variable to be certain type with React.useState?

In today’s short article, I will go over how to define your useState hook with TypeScript.

The solution */

//linguinecode.com/post/how-to-use-react-usestate-with-typescript

https: interface PersonProps {
  name: string;
  age: number;
  hobbies: Array<string>;
  isCool: boolean;
}

// Boolean type
const [isCool] = useState<boolean>(true);

// String type
const [name] = useState<string>("Ruben");

// Number type
const [age] = useState<number>(28);

// Null or undefined
const [random] = useState<null | undefined>();

// Array of string
const [hobbies] = useState<Array<string>>(["soccer", "cooking", "code"]);

// Custom interface
const [person] = useState<PersonProps>({
  isCool,
  name,
  age,
  hobbies,
});

/* Let’s go over it really quickly.

To define a type for React.useState() you must add a <type> after typing the word useState and before the opening parenthesis.

This will tell TypeScript that you’re giving a specific type to state property variable.

This is good because it will reduce silly dev mistakes, and keep your code more consistent throughout the apps life.

Let’s take a look at what happens if I try to against the type definition for one of the React.useState variables. */

const [isCool, setIsCool] = React.useState<boolean>(true);

setIsCool("false");

/* In the example above, I’m trying to set isCool to 'false' but in a string type, when I’ve specifically defined it to be a boolean.

If I try to save this, my application will break and print out the error message.


Argument of type '"false"' is not assignable to parameter of type 'SetStateAction<boolean>'.
 */
