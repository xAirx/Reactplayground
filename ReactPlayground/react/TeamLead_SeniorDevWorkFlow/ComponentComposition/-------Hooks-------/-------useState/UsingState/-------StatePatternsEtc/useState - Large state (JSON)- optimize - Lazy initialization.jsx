/* 3. Lazy initialization of state

Every time React re-renders the component, useState(initialState) is executed.

If the initial state is a primitive value (number, boolean, etc) there are no performance issues.

When the initial state requires expensive performance-wise operation, use the lazy initialization of state by supplying a function as an argument to useState(computeInitialState).

Here's an example:
 */

function MyComponent({ bigJsonData }) {
  const [value, setValue] = useState(function getInitialState() {
    const object = JSON.parse(bigJsonData); // expensive operation
    return object.initialValue;
  });
  // ...
}

/* getInitialState() is executed just once, at the initial render, to get the initial state.

On later renderings of the component, getInitialState() is not invoked, skipping the expensive operation. */
