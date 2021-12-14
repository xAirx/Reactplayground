/* 1. State management using useState()

A stateless functional component doesn't have a state. Here's an example:

Adding state to a functional component requires

4 steps:
    enabling the state,
    initializing,
    reading
    updating. */

function Bulbs() {
  return <div className="bulb-off"></div>;
}

/* 1.1 Enabling state

To transform <Bulbs> into a stateful component, you would need to tell React about it.

Import the useState hook from the 'react' package, then make a call of useState() at the top of the component's function.

Let's make these change to <Bulbs> component: */

import React, { useState } from 'react';
function Bulbs() {
  ... = useState(...);
  return <div className="bulb-off" />;
}

/* useState() is called at the first line of Bulbs function (don't think about hook's parameters and returned value for now). It's important that calling the hook inside the component makes it a stateful functional component.

Having the state enabled, the next step is to initialize it. */
