//////////////////////////////////////////
/////// Union ///////
type Person4 = {
  name: string;
  hungry: boolean;
};
type Youtuber = { youtuber: boolean };
type Harry2 = Person | Youtuber;
const harry3: Harry2 = {
  // we are not getting error if name or hungry is not here since HARRY2 is a union, its either person or a youtuber.
  /* name: "Harry", // hungry is missing in type
    hungry: true, */
  youtuber: true,
  /// Youtuber is not implemented
};

/* union types can help us if we have some place in our application be that a parameter
of a function or a constant or a variable we're using somewhere where we accept two different kinds
of values.
Well then a union type can help us to tell typescript that we are fine with either a number or a string
we use number and then the pipe symbol here and then the other type we all accept.
And you can have more than two types you can accept as many types here as you need.
So here I only need two though and that stage for the type assignment. */

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
