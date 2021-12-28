/* Functional updates

https://stackoverflow.com/questions/56108962/usestate-always-is-default-value-in-itself

If the new state is computed using the previous state, you can pass a function to setState.
 The function will receive the previous value, and return an updated value.
 Here’s an example of a counter component that uses both forms of setState:
 */

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

/*
// An easier way to do it is to have multiple setstate.
// Then we dont have to deal with the above. and can do:
 */

const [state, setState] = React.useState({ count: 4 });
const [state, setState] = React.useState({ theme: "blue" });
const count = state.count;
const theme = state.theme;

setState((prevState) => ({
  count: prevState.count - 1,
}));

function decrementCount2() {
  setState((prevState) => {
    return { count: prevState.count - 1 };
  });
}

function changeColor() {
  setState((prevState) => {
    return { count: prevState.count - 1 };
  });
}
