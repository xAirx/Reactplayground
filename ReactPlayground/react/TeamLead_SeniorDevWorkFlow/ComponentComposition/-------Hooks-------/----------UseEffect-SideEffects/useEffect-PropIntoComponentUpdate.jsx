/* React has no equivalent for watchers.

You can implement something like that using useEffect hook.
I will show you that hook in next section.

But I oftern think that there're not so many use-cases for the watch option, because most of the time,
it can be replaced with on - change event. */

//medium.com/@digruby/do-not-use-props-as-default-value-of-react-usestate-directly-818ee192f454

import React from "react";

const Box = ({ num }) => {
  // initial state (here num is the state value, is the state used during the initial render
  // so when box component is rendered the num prop passed is set to the state value
  // as we set state in our parent component, and use useEffect o watch that value here it will always be set
  const [state, setState] = React.useState(num);

  // This makes sure NUM is updated in the BOX component at all times.
  // here it works as a watcher function for a state value
  React.useEffect(() => {
    setState(num);
  }, [num]);

  return <div>child state ${state}</div>;
};

const App = () => {
  const [state, setState] = React.useState();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setState(Math.random(10))}>Click Me</button>
      <div>parent state: {state}</div>
      <Box num={state} />
    </div>
  );
};
export default App;
