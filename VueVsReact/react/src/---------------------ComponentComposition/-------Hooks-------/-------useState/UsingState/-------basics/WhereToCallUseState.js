/* 4.1 Where to call useState()

When using useState() hook you have to follow the rules of hooks:

    Only Call Hooks at the Top Level: you cannot call useState() in loops, conditions, nested functions, etc. On multiple useState() calls, the invocation order must be the same between renderings.
    Only Call Hooks from React Functions: you must call useState() only inside the functional component or a custom hook.

Let's follow examples of correct and incorrect usage of useState().
Valid call of useState()

useState() is correctly called at the top level of functional component: */

function Bulbs() {
  // Good
  const [on, setOn] = useState(false);
  // ...
}

/* Multiple useState() calls are correctly invoked in the same order: */

function Bulbs() {
  // Good
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(1);
  // ...

/* useState() is correctly called at the top level of a custom hook:
 */
function toggleHook(initial) {
  // Good
  const [on, setOn] = useState(initial);
  return [on, () => setOn(!on)];
}
function Bulbs() {
  const [on, toggle] = toggleHook(false);
  // ...
}

/* Invalid call of useState()

useState() is incorrectly called within a condition:
 */
function Switch({ isSwitchEnabled }) {
  if (isSwitchEnabled) {
    // Bad
    const [on, setOn] = useState(false);
  }
  // ...
}

/* useState() is incorrectly called within a nested function: */

function Switch() {
  let on = false;
  let setOn = () => {};
  function enableSwitch() {
    // Bad
    [on, setOn] = useState(false);
  }
  return (
    <button onClick={enableSwitch}>
      Enable light switch state
    </button>
  );
}
