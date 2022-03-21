/* if you call the setState it won't update immediately in the next line.
It will update after the render method gets called.
If you want to see the updatedState you can write a callback function in the
setState like this.
 */
this.setState(
  (prevState, newEmployer) => {
    employers: prevState.employers + newEmployer;
  },
  () => console.log("UpdatedState", this.state.employers)
);
