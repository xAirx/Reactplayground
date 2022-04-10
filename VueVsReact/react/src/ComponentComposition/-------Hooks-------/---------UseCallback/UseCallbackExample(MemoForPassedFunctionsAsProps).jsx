/* Don't optimize functions that update state (useState, useReducer)

A common task whenever we pass down a callback function from a parent component to a child component is to prevent it from being recreated, unless its arguments have changed.

We can perform this optimization with the help of the useCallback hook.

useCallback was created specifically for callback functions that are passed to child components to make sure that they are not recreated needlessly,
which incurs a performance hit on our components whenever there is a re - render.

This is because whenever our parent component re - renders, it will cause all child components to re - render as well.

This is what causes our callback functions to be recreated on every re - render.
*/

// Parent component passing a function to our input component (child)
// The function passed to the input component is a callback function that is passed to the parent component
// The parent component is responsible for handling the callback function whenever the the  handleSetText state value changes


const [text, setText] = useState("");

  // the function will run on every re-render of the component
  // This function does not run if the value does not change.
const handleSetText = useCallback((e) => {
    // if this value is new run the handleSetText function
    // the value comes from the child component
    setText(e.target.value);
  });

  return (
    <form>
      {/*   // passing function down and text prop.
      When handleSetText is called in the child component, it will run the function in the parent component
      thus changing the passed text prop.
      // a good way to optimize this would be to use useCallback hook in the parent here
      and useEffect in the child component, then we are sure all references are up to date.
      and we do not have stale props or state or references. */}
      <Input text={text} handleSetText={handleSetText} />
      <button type="submit">Submit</button>
    </form>
  );
};

function Input({ text, handleSetText }) {
  return <input type="text" value={text} onChange={handleSetText} />;
}



////////////////////////////// Example 2 //////////////////////////////
/* useCallback(), compared to useMemo(), is a more specialized hook that memoizes callbacks:
 */
import { useCallback } from 'react';
function MyComponent({ prop }) {
  const callback = () => {
    return 'Result';
  };
  const memoizedCallback = useCallback(callback, [prop]);

  return <ChildComponent callback={memoizedCallback} />;
}

/* In the above example, useCallback(() => {...}, [prop]) returns the same function instance as long as prop dependency is the same.

You can use the same way the useMemo() to memoize callbacks:
 */

import { useMemo } from 'react';
function MyComponent({ prop }) {
  const callback = () => {
    return 'Result';
  };
  const memoizedCallback = useMemo(() => callback, [prop]);

  return <ChildComponent callback={memoizedCallback} />;
}