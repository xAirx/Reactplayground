/* React has no syntax for event emitting.
You just pass a handler function as a prop-- i.e.parent
component determine what to do and children execute that.


// With vanilla javascript you might be used to having a seperate function for each event handler.
//  This is not the case with React.
//  You can pass a single function as a prop, and that function will be called when the event fires.
//  This is called a “callback prop”.


Callback props

In React applications, interactivity is rarely confined to just one component: events that happen in one component will affect other parts of the app.
When we start giving ourselves the power to make new tasks, things that happen in the <Form /> component will affect the list rendered in <App />.

We want our handleSubmit() function to ultimately help us create a new task, so we need a way to pass information from <Form /> to <App />.
We can't pass data from child to parent in the same way as we pass data from parent to child using standard props. Instead, we can write a
function in <App /> that will expect some data from our form as an input, then pass that function to <Form /> as a prop.
This function-as-a-prop is called a callback prop. Once we have our callback prop, we can call it inside <Form /> to send the right data to <App />.

Events don’t have any special meaning in React, they’re just callback props will be called by the child component.
*/

function Child({ onHello }) {
  const handleClick = () => {
    console.log("hello there");
    onHello();
  };

  return <button onClick={handleClick}>click me</button>;
}

function Parent() {
  const parentMethod = () => {
    /* blah blah... */
  };

  return <Child onHello={parentMethod} />;
}

/* Handling form submission via callbacks

Inside the top of our App() component function, create a function named addTask() which has a single parameter of name: */

function addTask(name) {
  alert(name);
}

/* Next, we'll pass addTask() into <Form /> as a prop.
The prop can have whatever name you want, but pick a name you’ll understand later.
Something like addTask works, because it matches the name of the function as well as what the function will do.
Your <Form /> component call should be updated as follows:
 */
<Form addTask={addTask} />;

/* Finally, you can use this prop inside the handleSubmit() function in your <Form /> component! Update it as follows:
 */
function handleSubmit(e) {
  e.preventDefault();
  props.addTask("Say hello!");
}

/* Clicking on the "Add" button in your browser will prove that the addTask() callback function works,
but it'd be nice if we could get the alert to show us what we're typing in our input field! This is what we'll do next.

Note: We decided to name our callback prop addTask to make it easy to understand what the prop will do.
 Another common convention you may well come across in React code is to prefix callback prop names with the
 word on, followed by the name of the event that will cause them to be run.For instance, we could have given
 our form a prop of onSubmit with the value of addTask.
 */

/*  Last but not least, there are callback event handlers or callback handlers in short.
 They are used when a child component needs to communicate to a parent component.
 Since React props are only passed down the component tree, a callback handler, which is a function at its core, is used to communicate upward: */

import React from "react";

function App() {
  const [text, setText] = React.useState("");

  // 1
  function handleTextChange(event) {
    setText(event.target.value); // 3
  }

  return (
    <div>
      <MyInput inputValue={text} onInputChange={handleTextChange} />

      {text}
    </div>
  );
}

// 2
function MyInput({ inputValue, onInputChange }) {
  return <input type="text" value={inputValue} onChange={onInputChange} />;
}

/* A callback handler is defined somewhere(1), used somewhere else (2), but calls back to the place where its defined(3).
This way, it's possible to communicate from child to parent components.
A callback handler is passed down via React props and communicates up when the function is called. */
