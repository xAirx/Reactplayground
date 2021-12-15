/* Don't optimize functions that update state (useState, useReducer)

A common task whenever we pass down a callback function from a parent component to a child component is to prevent it from being recreated, unless its arguments have changed.

We can perform this optimization with the help of the useCallback hook.

useCallback was created specifically for callback functions that are passed to child components to make sure that they are not recreated needlessly,
which incurs a performance hit on our components whenever there is a re - render.

This is because whenever our parent component re - renders, it will cause all child components to re - render as well.

This is what causes our callback functions to be recreated on every re - render.

However, if we are using a setter function to update state that we've created with the useState or useReducer hooks, we do not need to wrap that with useCallback.

In other words, there is no need to do this: */

const App = () => {
  const [text, setText] = useState("");

  // This functin does not run if the value does not change.
  const handleSetText = useCallback((e) => {
    setText(e.target.value);
  });
  return (
    <form>
      <Input text={text} handleSetText={handleSetText} />
      <button type="submit">Submit</button>
    </form>
  );
};

function Input({ text, handleSetText }) {
  return <input type="text" value={text} onChange={handleSetText} />;
}
