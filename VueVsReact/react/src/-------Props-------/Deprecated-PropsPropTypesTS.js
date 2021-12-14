/* In React, properties / attributes passed from parent to children are also called props.

1. React props can be passed conditionally

Props that are passed to components can be thought of like arguments that are passed to a function.

If prop values are not passed a certain component, an error will not be thrown. Instead, within the component that prop will have a value of undefined.

If you would like to be alerted to when a value is not passed as a prop to a component, you can use a tool like prop-types or TypeScript using these tools.

With prop-types or TypeScript, we can tell React the props we are passing for a given component, what their values should be, and whether they are optional.

 */
<Child name={test} item={sampleData} />;

/* 1st argument of a functional component is the props.
 */
import React from "react";

function Child(props) {
  // props.name
  // props.item
}

/* You can use prop-types library for validation.
 */
import React from "react";
import PropTypes from "prop-types";

function Child(props) {
  // props.name
  // props.item
}

Child.propTypes = {
  name: PropTypes.string,
  item: PropTypes.shape({
    one: PropTypes.string.isRequired,
    two: PropTypes.number.isRequired,
  }).isRequired,
};

Child.defaultProps = {
  name: "John Doe",
};

export default Child;
