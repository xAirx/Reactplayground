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

User.propTypes = {
  age: PropTypes.number,
};

export default User;
