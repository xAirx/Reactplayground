/* Initial State

https://www.andreasreiterer.at/dynamically-add-classes/

First of all, we need to track if our box is currently visible or hidden.That’s what a component’s state is for.
It stores all the information that can change within this component.

At the beginning, we initialize our state object. It has a boolean value isBoxVisible that is initially set to false. */

state = {
  isBoxVisible:false
};

/* Reacting to User Interactions

Next, let’s take a look at our button within our render function. Whenever the user clicks our button,
it will toggle the boolean value for isBoxVisible.As you can see, we pass our toggleBox function to the button’s
onClick event.Each time the button is pressed, it will toggle the boolean value for isBoxVisible in the component’s state.
 */

toggleBox = () => {
  this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
};

render() {
  return (
    <div className="App">
      <button onClick={this.toggleBox}>Show Box</button>

      [...]
    </div>
  );
}
/*
Dynamically changing CSS classes

When the state of a component changes, React performs a re - render.So we can react to state changes within our render function.
This is the point where we pass the respective CSS classes to our box.
 */

render() {
  const { isBoxVisible } = this.state;

  return (
    <div className="App">
      <button onClick={this.toggleBox}>Show Box</button>

      <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
        <p>I'm the box</p>
      </div>

    </div>
  );
}

/* As you can see, at the top of our render function, we get isBoxVisible from the component’s state.
Within our Markup, you can see that we pass the className information to our box div, depending on the state of isBoxVisible: */

<div className={`box ${isBoxVisible ? "" : " hidden"}`}>

/* Instead of just a string with the class name, we can pass an expression.
This expression is evaluated each time the component is rendered.
For short expressions I prefer the short hand syntax like in this example,
but you could also just call a function that returns the right class names: */

<div className={this.getBoxClassNames()}></div>