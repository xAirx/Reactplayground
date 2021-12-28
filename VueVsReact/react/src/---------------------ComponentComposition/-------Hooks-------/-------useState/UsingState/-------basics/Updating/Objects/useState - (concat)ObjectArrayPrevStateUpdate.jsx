/* Functional updates

https://stackoverflow.com/questions/56108962/usestate-always-is-default-value-in-itself

If the new state is computed using the previous state, you can pass a function to setState.
 The function will receive the previous value, and return an updated value.
 Here’s an example of a counter component that uses both forms of setState:
 */

///////////////////// OBJECT VERSION /////////////////////
handleCommentSubmit = (newEmployer) => {
  this.setState(
    (prevState, newEmployer) => ({
      employers: prevState.employers.concat(newEmployer),
    }),
    () => {
      console.log("handleCommentSubmit AFTER", this.state.employers);
    }
  );
};
