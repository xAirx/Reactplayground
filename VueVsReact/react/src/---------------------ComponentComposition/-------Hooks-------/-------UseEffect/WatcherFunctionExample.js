/*
Optimizing Performance by Skipping Effects

Hooks Example:

With hooks, we can simply pass a second argument into useEffect() as an array with count in it and add the conditional inside our useEffect().

Whatever is being passed into the array can be used to define all variables on which the hook depends. If one of the variables updates, the hook runs again.

Keep in mind, if you pass an empty array, the hook doesn’t run when updating the component at all because there is nothing to watch for.

This is useful when you are fetching data in a loop, and you only want to fetch it on componentDidMount(), therefore stopping the loop. */

import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, incrementCounter] = useState(0);

  // using useEffect as a watcher function
  useEffect(() => {
    if (counter <= 10) {
      document.title = counter;
    }
    // avoiding stale closure using dependencies array
  }, [counter]);

  // avoiding stale closure using prev state.
  function handleIncrement() {
    incrementCounter((counter) => counter + 1);
  }

  return (
    <div>
      <div>{counter}</div>
      <hr />
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

/*
We would pass [counter] into the second argument of useEffect(). */
