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
