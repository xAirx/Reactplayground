/*
The ”+” and ”-” buttons use the functional form, because the updated value is based on the previous value.
But the “Reset” button uses the normal form, because it always sets the count back to the initial value.

If your update function returns the exact same value as the current state,
the subsequent rerender will be skipped completely.

    Note
    Unlike the setState method found in class components, useState does not automatically merge update objects.
    You can replicate this behavior by combining the function updater form with object spread syntax:
 */

///////////////////// EXAMPLE 1
[...prevState.employers, newEmployer];

/* but you don't need prevState at all. You can just: */

this.setState({
  employers: [...this.state.employers, newEmployer],
});

///////////////////// EXAMPLE 2

const [state, setState] = useState({});
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues };
});

// Another example

// Using an object as state, we have to remember to spread
// The previous state.
const [state, setState] = React.useState({ count: 4, theme: "blue" });
const count = state.count;
const theme = state.theme;

function decrementCount() {
  // When you use the setState value it is not merging like it does in
  // Class Components.

  // In classcomponents it would merge the state object with the current state.
  // It is overwriting it.

  // Since it is being overwritten we have to use the spread operator
  // For the previous state.

  // Automatic merging does not happen, because when we use useState,
  // it will become asynchronous. since we can have multiple state instances.
  setState((prevState) => ({
    ...prevState,
    count: prevState.count - 1,
  }));
}

function decrementCount2() {
  setState((prevState) => {
    return { ...prevState, count: prevState.count - 1 };
  });
}

function changeColor() {
  setState((prevState) => {
    return { ...prevState, count: prevState.count - 1 };
  });
}
