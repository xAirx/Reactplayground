/* Updating Primitive Types

Updating state variables with useState always replaces the previous state.
This means that updating primitive types(strings, booleans, numbers) is simple because their values are replaced rather than mutated.

Here is the classic and simple counter component example.
We want to increment or decrement a number stored in state and display that number to the user or reset that number back to 0.
 */

/////////// Example 2

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <p className="count">{count}</p>
      <div className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

///////////////////// Example 2

import React, { useState } from "react";
function Bulbs() {
  const [on, setOn] = useState(false);
  const lightOn = () => setOn(true);
  const lightOff = () => setOn(false);
  return (
    <>
      <div className={on ? "bulb-on" : "bulb-off"} />
      <button onClick={lightOn}>On</button>
      <button onClick={lightOff}>Off</button>
    </>
  );

/* React app update state

When On button is clicked, lightOn() handler updates the state to true: setOn(true). The same happens when Off is clicked, except that the state updates to false.

As soon as the state changes, React re-renders the component. on variable gets the new state value.

The state updates as a response to an event that provides some new information.

Such events are a button click, an HTTP request completion, etc. Make sure to invoke the state updater function within a callback of an event or a callback of other hooks. */