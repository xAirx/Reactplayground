/* In React, functional components used to be stateless.But thanks to hooks,
  we now have the useState hook to store state inside our component.
  To use the useState hook we have to import it, and the syntax is: */

import React, { useState } from "react";

function App() {
  const [stateName, setStateName] = useState("default value");
}

/* useState syntax

We define the name of the state variable and name of its setter function inside the brackets,
  then we pass the default value of our variable to the useState hook.

You can imagine the hook like this to understand the syntax better: It is like a function that
creates a variable,
sets its value to the passed value, then returns an array which contains the variable and its
setter function.

Note that you should use a single pair of curly parenthesis to switch to JavaScript scope and
print a variable inside your JSX, instead of double parenthesis, which was the case with Vue.
 */

import { React, useState } from "react";

function TestUseState() {
  const [frameworkName, setFrameworkName] = useState("React");

  return (
    <div>
      <h1>useState API</h1>
      <p>Current Framework: {frameworkName}</p>
    </div>
  );
}

export default TestUseState;
