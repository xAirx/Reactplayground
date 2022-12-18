/*  Don't optimize functions that update state (useState, useReducer)

https://www.freecodecamp.org/news/5-react-lessons-tutorials-dont-teach/

A common task whenever we pass down a callback function from a parent component to a child component is to prevent it from being recreated, unless its arguments have changed.

We can perform this optimization with the help of the useCallback hook.

useCallback was created specifically for callback functions that are passed to child components to make sure that they are not recreated needlessly,

which incurs a performance hit on our components whenever there is a re-render.

This is because whenever our parent component re-renders, it will cause all child components to re-render as well.

This is what causes our callback functions to be recreated on every re-render.

However, if we are using a setter function to update state that we've created with the useState or useReducer hooks, we do not need to wrap that with useCallback.

In other words, there is no need to do this:
 */

import React from "react";

export default function App() {
  const [text, setText] = React.useState("");

  // Don't wrap setText in useCallback (it won't change as is)
  const handleSetText = React.useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <form>
      <Input text={text} handleSetText={handleSetText} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Input({ text, handleSetText }) {
  return <input type="text" value={text} onChange={handleSetText} />;
}
/*
The reason comes directly from the React documentation:

React guarantees that setState function identity is stable and won't change on re-renders.

This is why it's safe to omit from the useEffect or useCallback dependency list.

Therefore, not only do we not need to optimize it unnecessarily with useCallback, but we also do not need to include it as a dependency within useEffect because it will not change.

This is important to note because in many cases, it can cut down the code that we need to use.

And most importantly, it is an unproductive attempt to optimize your code as it can incur performance problems of its own.  */
