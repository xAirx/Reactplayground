/* This topic overlaps with handling user events so if
you do not understand something, wait until you complete
the next section.Here, we handle the onChange event manually and call the setUserInput function to set the state to the event's value.

As we mentioned earlier, React uses a 1 - way binding
model.This means that changing the userInput state will
not affect the value we see inside the text input – we won't see Hello inside the input box initially. Also when we click the button, it will update the state but the input inside the box will maintain its value.
 */
import { React, useState } from "react";

function FormInputBinding() {
  const [userInput, setUserInput] = useState("Hello");

  return (
    <div>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => setUserInput("Goodbye")}>
        Click to say goodbye
      </button>
      {userInput}
    </div>
  );
}

export default FormInputBinding;
