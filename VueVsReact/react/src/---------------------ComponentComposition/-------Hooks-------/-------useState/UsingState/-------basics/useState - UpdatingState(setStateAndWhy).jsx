/* 1.4 Updating state
Updating the state with a value

As you know already, useState(initialState) returns an array where the first item is the state value. Luckily, the second item is a function that updates the state! */

/*
You have to use setState

The reason it can be confusing: if you change the parent's state by hand (bad practice!), the object will change in the child component, too. But won't trigger re-render! (The child component won't "know" that its props has changed.) So you won't see the UI change.

However if you change the parent's state with setState (the preferred practice), the child will be notified, that it must re-render itself.
 */

const [state, setState] = useState(initialState);
// changes state to `newState` and triggers re-rendering
setState(newState);

// after re-render `state` has the value of `newState`

/* To update the component's state invoke the updater function setState(newState) with the new state. The component re-renders and state receives the new value newState.

Let's update bulb switch state to true when the button On is clicked, and respectively false when Off is: */

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
}

/* React app update state

When On button is clicked, lightOn() handler updates the state to true: setOn(true). The same happens when Off is clicked, except that the state updates to false.

As soon as the state changes, React re-renders the component. on variable gets the new state value.

The state updates as a response to an event that provides some new information.

Such events are a button click, an HTTP request completion, etc. Make sure to invoke the state updater function within a callback of an event or a callback of other hooks. */
