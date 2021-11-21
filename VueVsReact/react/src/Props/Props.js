/* In React, properties / attributes passed from parent to children are also called props.
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
