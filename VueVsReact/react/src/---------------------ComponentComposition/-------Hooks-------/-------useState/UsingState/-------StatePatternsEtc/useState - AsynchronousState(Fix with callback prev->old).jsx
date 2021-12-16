/* How React state is actually updated

As a React developer, you know that state can be created and updated with the useState and useReducer hooks.

But what happens exactly when you update a component's state with either of these hooks? Is the state updated immediately or is it done at some later time?

Let's look at the following code, which is a very simple counter application. As you would expect, you can click on the button and our counter increases by 1.
 */
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1> {/* 1 (as we expect) */}

      <button onClick={addOne}>+ 1</button>
    </div>
  );
}

/* But what if we attempt to add an additional line, which also updates our count by one – what do you think will happen?

When you click on the button, will our displayed count increase by one or two?

import React from 'react'; */

export default function App() {
  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1> {/* 1?! */}

      <button onClick={addOne}>+ 1</button>
    </div>
  );
}

/* If we run this code we see it's incremented only by one! Despite attempting to increment the count by one twice, with two separate state updates.

Why does our counter display 1, despite clearly incrementing state by 1 two times?

    The reason for this is that React schedules a state update to be performed when we update state the first time.
    Because it is just scheduled and is not performed immediately
    (it is asynchronous and not synchronous), our count variable is not updated before we attempt to update it a second time.

In other words, because the state update is scheduled, not performed immediately, the second time we called setCount, count is still just 0, not 1.

The way that we can fix this to update state reliably, despite state updates being asynchronous,
is to use the inner function that's available within the useState setter function.

This allows us to get the previous state and return the value that we want it to be in the body of the inner function.
When we use this pattern, we see that it's incremented by two like we originally wanted: */

import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(prevCount => prevCount + 1); // 1
    setCount(prevCount => prevCount + 1); // 2
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+ 1</button>
    </div>
  );
}