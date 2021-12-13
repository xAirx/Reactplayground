/* Using the Spread Operator with setState() for Setting the Nested State

Let's suppose, you need to use the setState() method to update your component state.
Since the setState() may work asynchronously in manu cases for performance reasons.
You would need to write the following code: */

this.setState((state) => ({
  state1: state.state1 + 1,
}));

/* The state1 variable which is part of our component state will be incremented by one.

Now, let's suppose we have a state with a nested object in our component: */

this.state = {
  stateObj: {
    attr1: "",
    attr2: "",
  },
};

/*
You can use the Spread syntax to update the nested state object.
 */

this.setState((state) => ({
  person: {
    ...state.stateObj,
    attr1: "value1",
    attr2: "value2",
  },
}));
