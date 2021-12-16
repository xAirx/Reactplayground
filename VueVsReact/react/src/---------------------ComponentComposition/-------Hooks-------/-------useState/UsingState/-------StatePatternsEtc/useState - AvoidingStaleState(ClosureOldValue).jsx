/* 4.2 Stale state

https://dmitripavlutin.com/react-hooks-stale-closures/

A closure is a function that captures variables from the outer scopes.

Closures (e.g. event handlers, callbacks) might capture state variables from the functional component scope. Because state variables change between renderings, closures should capture variables with the latest state value.

Otherwise, if the closure captures outdated state values, you might encounter stale state problem.

Let's see how a stale state manifests itself. A component <DelayedCount> should count the number of button clicks, but with a delay of 3 seconds.

Here's the first naive implementation:
 */
function DelayedCount() {
  const [count, setCount] = useState(0);
  const handleClickAsync = () => {
    setTimeout(function delay() {
      setCount(count + 1);
    }, 3000);
  };
  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  );
}

/* Open the demo. Click Increase async quickly a few times. count doesn't reflect the actual number of clicks, some clicks are "eaten".

React app multiple state

delay() is a stale closure that captures an outdated count variable from the initial render (when it was initialized with 0).

To fix the problem, let's use a functional way to update count state: */

function DelayedCount() {
  const [count, setCount] = useState(0);
  const handleClickAsync = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 3000);
  };
  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  );
}

/* Now setCount(count => count + 1) updates the count state correctly inside delay(). React makes sure the latest state value is supplied as an argument to the update state function. The stale closure is solved.

Open the demo. Click "Increase async" quickly a few times. When delay passes, the counter correctly reflects the number of clicks.

React app multiple state */
