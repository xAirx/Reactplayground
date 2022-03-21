/* 1.3 Reading state

When the hook useState(initialState) is invoked, it returns an array. The first item of this array is the state value: */

const stateArray = useState(false);
stateArray[0]; // => the state value

/*
Let's read state of <Bulbs> component:
 */

import React, { useState } from "react";
function Bulbs() {
  const stateArray = useState(false);
  return <div className={stateArray[0] ? "bulb-on" : "bulb-off"} />;
}

{
  /* <Bulbs> component state is initialized with false, as demo shows.

useState(false) returns an array. The first item contains the state value, which currently is false (because the state's been initialized with false).

Let's use array destructuring to extract the state value into a variable on:
 */
}

import React, { useState } from "react";
function Bulbs() {
  const [on] = useState(false);
  return <div className={on ? "bulb-on" : "bulb-off"} />;
}

/* on state variable holds the state value.

Ok, the state's been enabled and initialized, and now you can read it. But how do you update it? Let's look again at what useState(initialState) returns. */
