/* React way

In React, you use useState hook. Hey, here comes the hook! */

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return <button onClick="handleClick">{count}</button>;
}

/* Hooks are functions for accessing React's magic. useState is the one for managing component's state.

useState takes state's default value as an argument, and returns array that contains 0. "state variable" and 1. "function that update state". State's value can only be updated through that function.

Call useState by individual states.

 */

const [name, setName] = useState("John Doe");
const [age, setAge] = useState(20);
/*
You can set object as state's value. */

const [user, setUser] = useState({ name: "John Doe", age: 20 });
