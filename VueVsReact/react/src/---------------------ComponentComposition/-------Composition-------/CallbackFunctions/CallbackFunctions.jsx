/* Information in React gets passed around to components in two different ways.First, information can get passed from parent to child as props.
That seems pretty straightforward.Establish the property when creating an instance of the child component and it will be available to that instance.

  But what about data flow in the opposite direction ?
  How does a child component get information back to its parent ?
  Passing props down to the child is also part of that process, but what gets passed is a bit different.

Instead of passing down a piece of the state to a child component, the parent can pass down a callback function.
This callback function is run at a later time, usually through some interaction with the child component.
The purpose of this callback function is to change a piece of the state that is a part of the parent component.
This closes the data loop.


The flow in the counter app goes like this.

In the parent component, called App, the state is created with the count.

This is also where the instances of the PlusButton and MinusButton are created.

*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        {/* // Passing down a function as a prop  */}
        <PlusButton
          count={this.state.count}
          increaseCount={(count) => this.setState({ count })}
        />
        <MinusButton
          count={this.state.count}
          decreaseCount={(count) => this.setState({ count })}
        />
      </div>
    );
  }
}

/* At this point, I know that when those two buttons are clicked they will have to change the ‘count’ piece of App's state.

In order for the child components to affect the parent’s state, I need to pass callback functions to the children as props.

That is what the increaseCount and decreaseCount functions are doing.


In this example, I’ve included them inline with the component instances for two reasons.

One is because since I’m using a fat arrow function, the ‘this’ context stays where I need it.

  Two, because of the first reason, there is less code.

  No worrying about having to use.bind(this) with the functions.

  So, now the child component will have access to the function inside of the props being passed to it.

  Here is the code for the PlusButton component. */

const PlusButton = ({ count, increaseCount }) => {
  return <button onClick={() => increaseCount(count + 1)}>+</button>;
};

/* I’m using the ES6 syntax of pulling out the count and increaseCount from props so I don’t have to write this.props.

when I want to reference them.Just seems cleaner to me.

  Also, I had to encapsulate the increaseCount function inside of another function.

Otherwise, I would run into an infinite loop.
 */

/*
If it looked like this: */

<button onClick={increaseCount(count + 1)}>+</button>;

/*

When the page is first loaded and the PlusButton component is rendered and this function would be run.Which would change the state and cause a re - render,

which would again call this function, and on and on.

But if you wrap this callback inside of another function, then when the page renders, the function declaration is stored inside the onClick.

Moving on.

Here in the child component is where the increaseCount function gets called and the parameter that gets passed in is the current count + 1.

If we plug that parameter into the original function, we get something like this:

increaseCount={(count += 1) => this.setState({count += 1})

We are calling this function and setting the count piece of the state to the value of what it is currently + 1.

So, this is how a child can send data back the other way, up to the parent.

The process has to originate from the parent passing a function down to the child as a prop that will eventually get called and change the parent’s state. */
