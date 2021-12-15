/* 1.2 Initializing state

The first argument of useState(initialState) is the initial state. Simple as is.

In the beginning, the bulb is switched off. Reflected into state it should be initialized with false: */

import React, { useState } from 'react';
function Bulbs() {
  ... = useState(false);
  return <div className="bulb-off" />;
}
/*
useState(false) initializes the state with false.

Having the state enabled and initialized, how do you read it ?

Let's see what useState(false) returns.

 */

/*
