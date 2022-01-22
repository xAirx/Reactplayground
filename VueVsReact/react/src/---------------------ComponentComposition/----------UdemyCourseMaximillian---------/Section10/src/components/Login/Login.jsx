import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = ({ loginHandler, logoutHandler }) => {
  /// GOOD USECASE FOR USEREDUCER
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect has one main job, so the setState here does not count
  // as a sideEffect

  //UseEffect can be used to re-run logic, not only run on first render.

  // checking if form is valid by checking both inputs
  useEffect(() => {
    // makeTimeout (debouncer)
    // so we dont run on every keystroke
    const checkFormIsValid = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 1000);

    // The cleanup function runs before the entire statement in the useEffect, but not the first time it runs.
    // Triggers before the effect function runs.
    // a cleanup function runs also after a component is unmounted!
    return () => {
      console.log("CLEANUP when UNMOUNTED");
      clearInterval(checkFormIsValid);
    };

    // useEffect cleanup
    // useEffect runs setFormIsValid if either value changes.
    //You add what you use inside the useEffect to DP array
    // what we say to react is on render, we run useEffect
    // if any of the dependencies changed in the last render cycle
  }, [enteredEmail, enteredPassword]);

  // we can omit setFormIsValid, because
  // Stateupdating functions are ensured by react to never change
  //they will always be the same across render cycles.
  /*   }, [setFormIsValid, emailIsValid, passwordIsValid]);
   */ /////////////////// VALIDATION ///////////////////////

  /// here our state depends on another state which might be an outdated value
  /* We cannot grab the previous state with this example
 Which is why useReducer would be a better example to use

 we would only get the latest state from setEmailIsValid and not entered email doing this:  */

  // checks if Email includes, setting validation onBlur true or false

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  // checks if entered password includes, setting validation onBlur true or false
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  /////////////////// HANDLERS ///////////////////////

  // sets entered email
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    /* setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    ); */
  };

  // sets entered password
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // This only runs if formIsValid
  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <label>Example1</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

////////////////////

//Example 2

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: state.cart.concat(action.item) };
    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((item) => item.id !== action.id) };
    default:
      return state;
  }
};
