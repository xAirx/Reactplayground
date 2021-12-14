/* React takes more HTML - like approach.Event handler is
 passed to prop named onEventName-- e.g.onChange, onSubmit. */

const handleClick = (e) => {
  /* blah blah... */
};

return <button onClick={handleClick}>Click me</button>;

/* The next example shows you an input field instead of a button.There, we are using the actual event which is always passed as
  first parameter to the event handler function. The event is a synthetic event from React which essentially encapsulates the native HTML event
and adds some functionality on top of it.
This event gives you the value from the input field every time someone types into it with the event's target property:
 */

import React from "react";

function App() {
  const [value, setValue] = React.useState(""); // value is the value of the input field
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}

/* Previously we haven't used the event, because in our button example we didn't need it.In the input field example we needed it though.
Last but not least, don't forget to pass the value to the input element to make it a controlled component: */

import React from "react";

function App() {
  const [text, setText] = React.useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />

      {text}
    </div>
  );
}
