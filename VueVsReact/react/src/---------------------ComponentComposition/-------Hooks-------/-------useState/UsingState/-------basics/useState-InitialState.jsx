/* When to use useState initial value as function?
is the case where you use useState's initial value as a function?
Is there any difference from just passing a value? */

https://stackoverflow.com/questions/60120261/when-to-use-usestate-initial-value-as-function

const [state, setState] = useState(() => someValue);

/* I think it is more or less clear from the docs: */

const [state, setState] = useState(initialState);

/* The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render
 */
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
/*

If you want to use useState's initial value as a function, you need to use currying : */

const [state, setState] = useState(() => () => someValue);
/*
This is because in the documentation, useState executes the provided function and considers its result as the initial value. Using currying, () => someValue is returned and considered to be the intial value.
 */
