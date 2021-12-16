/* What are controlled components in React?

https ://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/


Controlled components in React are those in which form data is handled by the component’s state.

Forms are used to store information in a document section.

The information from this form is typically sent to a server to perform an action.

This data is held by form input elements and control elements, such as input, select, textarea, etc.,

which maintain and control their states or values.


What do I mean by that ?


Each form element contains a value.

The value may be typed(input, textarea) or selected(checkbox, select, radiobutton, etc) by the user or browser.

When the element’s value is changed(triggered by the act of typing or selecting), it is updated accordingly.

You can get the value of an element using the.value property in its HTMLElement instance.

You can also use the.value property to set values in the form elements.

Now we can use state in our component to hold or manage the values of the elements in a form element.


Here’s an example: */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function User({ age }) {
  // if we do not set the inital value of the state, it will be undefined
  // and the component will not render
  // because our input below expects a value from the state
  // when you do not pass an initial val
  // your component is uncontrolled.
  // When you run an onchange along side an undefined value
  // it will throw an error
  // saying that we are changing an uncontrolled component
  // to be controlled.
  // So we need to set the initial value of the state
  // to be the value of the input
  // so that we can use it in the onchange

  /*   This means that if we pass an empty String
    we are going from uncontrolled to controlled
    and now react can control our component and the browser do its thing
  */

  //Ucontrolled
  const [name, setName] = useState();
  //Controlled
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  const user = { age, name };
  const buttonStyle = {
    backgroundColor: dark ? "#000" : "initial",
    color: dark ? "#FFF" : "initial",
  };

  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        style={buttonStyle}
        onClick={() => setDark((currDark) => !currDark)}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default User;

/* Here we have two states: name and email.


These states are assigned to the value property of the name and email input elements.

The name state holds the value of the name input element.


When a value is being typed in the name input, the onChange event attached to it sets the value of the input to the name state using the setName updater function.

The email state holds the value of the email input element.

The onChange event attached to the email input changes the email state via setEmail()

to hold the value typed into the element.

As you can see, the values of our input elements name and email are controlled by the React state;

the state becomes the “single source of truth” for the input elements.


Therefore, the App component shown above is a controlled component.

The drawback to using controlled components is that the number of states in

a component increases as more control elements are added to the form element. */
