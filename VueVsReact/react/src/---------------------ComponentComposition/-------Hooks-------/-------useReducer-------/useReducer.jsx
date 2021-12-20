useReducer
https://reactjs.org/docs/hooks-reference.html#usememo


What’s a Reducer?
https://daveceddia.com/usereducer-hook-examples/

/* A “reducer” is a fancy word for a function that takes 2 values and returns 1 value.
(if you’ve used Redux or the reduce method on arrays, you probably alread know what a “reducer” is!)

If you have an array of things, and you want to combine those things into a single value,
the “functional programming” way to do that is to use Array’s reduce function.

For instance, if you have an array of numbers and you want to get the sum,
    you can write a reducer function and pass it to reduce, like this: */

let numbers = [1, 2, 3];
let sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);

useReducer
https://reactjs.org/docs/hooks-reference.html#usememo


////////////////////////////////////////// Two ways to initialize state //////////////////////////////////////////
/* Specifying the initial state
There are two different ways to initialize useReducer state.
You may choose either one depending on the use case.
The simplest way is to pass the initial state as a second argument: */

  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}  );

////////////////////Note////////////////////

/*
React doesn’t use the state = initialState argument convention popularized by Redux.
The initial value sometimes needs to depend on props and so is specified from the Hook call instead.
If you feel strongly about this, you can call */

useReducer(reducer, undefined, reducer) /* to emulate the Redux behavior, but it’s not encouraged. */





/////////////////////////////// How to use  useReducer with react ///////////////////////////

const [state, dispatch] = useReducer(reducer, initialArg, init);

/* Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

It receives the current state as an input and should return the updated state.

To do that, it also receives an action that describes the desired state update.
useReducer() then returns an array with exactly two elements:

The state and a dispatch function that allows you to “send a new action to the reducer”.
 */




//////////////////////////////////// Actions /////////////////////////////////////////

/* An action then can be anything you want.

Could be just a string identifying the action or an object to also hold additional data (besides the type) like the item that should be added to the cart.

(If you’re familiar with Redux, you already know how this works.)

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

Here’s the counter example from the useState section, rewritten to use a reducer: */

//example 1

const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}



//Example 2

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { cart: state.cart.concat(action.item) }
    case 'REMOVE_FROM_CART':
      return { cart: state.cart.filter(item => item.id !== action.id) }
    default:
      return state
  }
}
const Shop = (props) => {
  const [cart, setCart] = useState({ cart: [] })
return (
    <div>
      <button
        onClick={() =>
          setCart({ cart: cart.concat({ id: 'p1', name: 'A Book' }) })
        }
      >
        Add to Cart
      </button>
      <button onClick={() => setCart({cart: cart.filter(item => item.id !== 'p1')})>
        Remove from Cart
      </button>
    </div>
    })
}


/* Note
React guarantees that dispatch function identity is stable and won’t change on re - renders.
This is why it’s safe to omit from the useEffect or useCallback dependency list.
 */






/*
/////////////////////////////Lazy initialization/////////////////////////////

You can also create the initial state lazily.

To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).


It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action:
 */


function init(initialCount) {  return {count: initialCount};}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':      return init(action.payload);    default:
      throw new Error();
  }
}


function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}




/* /////////////////////////////Bailing out of a dispatch/////////////////////////////

If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects.

(React uses the Object.is comparison algorithm.)

Note that React may still need to render that specific component again before bailing out.

That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree.

 If you’re doing expensive calculations while rendering, you can optimize them with useMemo.

 */