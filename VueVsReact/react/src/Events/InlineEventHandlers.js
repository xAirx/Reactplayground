/* Inline Event Handler in React */
/*  */
/* Inline event handlers, also called inline handlers, give us lots of new options by using an event handler directly in JSX: */

import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Count: {count}
      <button
        type="button"
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

/* Using the common function statement in JSX is verbose though. Hence, JavaScript arrow functions come in handy to define inline handlers more concise: */

import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Count: {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

/* In general, developers are lazy people, so often inline event handlers are used to avoid the extra
function declaration outside the JSX.However, this moves lots of business logic into the JSX which makes it less readable,
    maintainable and error prone.Personally, I like to keep the JSX clean without inline event handlers and declare event handlers instead outside of the JSX.

Inline handlers are also used to pass a parameter to a more universal handler which is defined outside of the JSX: */

import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function handleCount(delta) {
    setCount(count + delta);
  }

  return (
    <div>
      Count: {count}
      <button type="button" onClick={() => handleCount(1)}>
        Increase Count
      </button>
      <button type="button" onClick={() => handleCount(-1)}>
        Decrease Count
      </button>
    </div>
  );
}

/* This way, it's also possible to pass event and parameter side-by-side. Even though it's not needed in this example,
    you will surely experience one or the other case in the future where you will need the event(e.g.preventDefault for React Forms): */

import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function handleCount(event, delta) {
    setCount(count + delta);
  }

  return (
    <div>
      Count: {count}
      <button type="button" onClick={(event) => handleCount(event, 1)}>
        Increase Count
      </button>
      <button type="button" onClick={(event) => handleCount(event, -1)}>
        Decrease Count
      </button>
    </div>
  );
}

/* So whenever you need to pass event and parameter, for instance when you need an extra parameter for your onClick event, inline event handlers may help you.
hen a more universal event handler outside of the JSX can use this extra parameter(s). */
