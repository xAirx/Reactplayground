/*
Updating the state with a callback

When the new state is calculated using the previous state, you can update the state with a callback:
 */
const [state, setState] = useState(initialState);
// changes state to `newState` and triggers re-rendering
setState((prevState) => nextState);
// after re-render `state` becomes `newState`

/* Here are some use cases:
 */
// Toggle a boolean
const [toggled, setToggled] = useState(false);
setToggled((toggled) => !toggled);
// Increase a counter
const [count, setCount] = useState(0);
setCount((count) => count + 1);
// Add an item to array
const [items, setItems] = useState([]);
setItems((items) => [...items, "New Item"]);

/* Let's implement the bulb component to switch on/off with a single button:
 */

import React, { useState } from "react";
function Bulbs() {
  const [on, setOn] = useState(false);
  const lightSwitch = () => setOn((on) => !on);
  return (
    <>
      <div className={on ? "bulb-on" : "bulb-off"} />
      <button onClick={lightSwitch}>On/off</button>
    </>
  );
}

/* Functional updates

https://stackoverflow.com/questions/56108962/usestate-always-is-default-value-in-itself

If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of setState:
 */
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}
/*
The ”+” and ”-” buttons use the functional form, because the updated value is based on the previous value. But the “Reset” button uses the normal form, because it always sets the count back to the initial value.

If your update function returns the exact same value as the current state, the subsequent rerender will be skipped completely.

    Note

    Unlike the setState method found in class components, useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:
 */
const [state, setState] = useState({});
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues };
});

/*     Another option is useReducer, which is more suited for managing state objects that contain multiple sub-values.
 */
