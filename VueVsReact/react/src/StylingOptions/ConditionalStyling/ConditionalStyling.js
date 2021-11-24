/* In React we have to do things more primitively.
 */
import { React, useState } from "react";
import "./styles.css";

function ConditionalStyling() {
  let [stylesApplied, setStylesApplied] = useState(false);

  return (
    <div>
      <button onClick={() => setStylesApplied(!stylesApplied)}>Click me</button>
      <p style={{ color: stylesApplied ? "red" : "green" }}>Red or Green</p>
      <p className={stylesApplied ? "styleClass" : ""}>Red with class</p>
    </div>
  );
}

export default ConditionalStyling;

/* React Conditional Styling

Here we use plain JavaScript to bind either a styles object or a class name to the element.
I think this complicates the code a bit, and I'm not a huge fan of this syntax. */
