/* The most basic implementation of props is to define props in the parent component and
 pass it down to the next child component in the hierarchy, and then pass the
value again through props in the child component, and then again through the
grandchild — which is repeated as needed until the passed value arrives in the
target component.

https://medium.com/@martin.crabtree/react-js-using-children-props-c83d5b259756

The process is tedious, error prone, and also makes the code less flexible.

{ props.children }: A Better Way

Implementation is pretty simple.
In the parent component, import the child component,
but instead of invoking it with a self - closing tag, use an standard
open / closing tag.The information that you want to pass through props —
in addition to the standard implementation of passing props — is placed
between the opening and closing tags of the child component.

 */

import React from "react";

const ChildComponent = (props) => {
  return (
    <div style={{ backgroundColor: "blue", padding: "10px", width: "100px" }}>
      <h3> This is a ChildComponent </h3>
      {props.children}
    </div>
  );
};

export default ChildComponent;

import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div style={{ backgroundColor: "red", padding: "10px", width: "100px" }}>
      <h3> This is a ParentComponent </h3>
      <ChildComponent>
        <p style={{ backgroundColor: "white", padding: "10px" }} />
      </ChildComponent>
    </div>
  );
};
