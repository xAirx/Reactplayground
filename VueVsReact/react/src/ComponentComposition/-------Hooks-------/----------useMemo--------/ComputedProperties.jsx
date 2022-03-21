/* I think useMemo hook is React version of "computed property". */

/* useMemo takes function as 1st argument and array as 2nd argument, and returns memoized value.

React's functional component is re-rendered everytime props or states are updated.
But a function of useMemo's 1st argument only be re-calculated when values in an array passed as 2nd argument are updated.
If the values in 2nd argument array are not updated, cached value will be returned.

This behavior is similar to Vue's computed property, but it's
not so much common pattern as computed property.
You should use useMemo only when there's a real need for
optimization */

import React, { useMemo } from "react";

function MyComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setlastName] = useState("Doe");

  const fullName = useMemo(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return <p>Hello, {fullName} !</p>;
}

/* With React, you can extract the computation from the template by assigning the result to a variable.
 */

/* If performance is a concern, the computation can be wrapped in a useMemo hook. useMemo requires a callback that returns a computed result, and an array of dependencies.

In the following example, reversedMessage will only be recomputed if the message dependency changes.
 */

import { useMemo } from "react";

export default function ReversedMessage({ message }) {
  const reversedMessage = useMemo(() => {
    return message.split("").reverse().join("");
  }, [message]);

  return <p>{reversedMessage}</p>;
}
