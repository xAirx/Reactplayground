/* 2. Multiple states */

/* A functional component can have as many states as necessary by doing multiple calls of useState().
 */

function MyComponent() {
  const [state1, setState1] = useState(initial1);
  const [state2, setState2] = useState(initial2);
  const [state3, setState3] = useState(initial3);
  // ...
}

/* Make sure that multiple calls of useState() are always in the same order between renderings (more on that in 4.1 Where to call useState()).

Let's add a button Add bulb and a new state holding the count of bulbs. When the button is clicked, a new bulb is added.

The new state count holds the number of bulbs, and is initialized with 1: */

import React, { useState } from "react";
function Bulbs() {
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(1);
  const lightSwitch = () => setOn((on) => !on);
  const addBulbs = () => setCount((count) => count + 1);
  const bulb = <div className={on ? "bulb-on" : "bulb-off"} />;
  const bulbs = Array(count).fill(bulb);
  return (
    <>
      <div className="bulbs">{bulbs}</div>
      <button onClick={lightSwitch}>On/off</button>
      <button onClick={addBulbs}>Add bulb</button>
    </>
  );
}

/* Open the demo, then click Add bulb button: the number of bulbs increases. Clicking On/off button switches on/off the bulbs.

React app multiple state

    [on, setOn] = useState(false) manages the on/off state
    [count, setCount] = useState(1) manages the number of bulbs.

Multiple states work correctly within one component. */
