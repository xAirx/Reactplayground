// Handling events

// Event handlers are functions that are called when an event happens.

/* First, we will start with a button example in React for a specific onClick event handler.
    It's the most basic example on how to handle events in React with an event handler (also called event handler function or handler).
    A button has a onClick attribute which receives a function.
This function is called every time the event is triggered(here: when clicking the button): */

import React from "react";

function App() {
  function handleClick() {
    console.log("Button click ...");
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}

/* It works similar for other attributes like onChange(onChange event handler) and onSubmit(onSubmit event handler).
For beginners, often the onClick is not working, because instead of passing a function, they call the function directly in the JSX.
For example, in the next version, the event handler is only called once when rendering the component for the first time.
Every other click doesn't call the event handler function, because the function's return value is used in the onClick attribute and not the function itself.
So there is nothing to call; unless the function returns another function: */

import React from "react";

function App() {
  function handleClick() {
    console.log("Button click ...");
  }

  // don't do this
  return (
    <div>
      <button type="button" onClick={handleClick()}>
        {" "}
        /// DONT CALL THE FUNCTION, PASS IT INSTEAD Event Handler
      </button>
    </div>
  );
}

// Arrow function example

import React from "react";

function app() {
  const handleClick = () => {
    console.log("Button click ...");
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}
/*
But once more event handlers add up in a React component, it's nice to make them more distinguishable from other variables by giving them the
function statement again: */

import React from "react";

function App() {
  const user = {
    id: 1,
    name: "John",
  };

  function handleClick() {
    console.log("Button click ...");
  }

  function handleUserSignup() {
    console.log("User signup ...");
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
      <button type="button" onClick={() => handleUserSignup()}>
        Event Handler
      </button>
      <button type="button" onClick={() => handleUserSignup(user)}>
        Event Handler
      </button>
    </div>
  );
}
