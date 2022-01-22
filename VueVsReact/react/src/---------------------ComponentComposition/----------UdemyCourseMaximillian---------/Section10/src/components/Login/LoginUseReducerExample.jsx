import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

//created outside component function.
// we did so because inside the reducer function
// we wont need any data generated inside the component function
// all data that is required by the reducer is inside the component below

/* const emailReducer = (state, action) => {
  switch (action.type) {
    case "setIsvalid":
      return {
        isValid: state.isValid(action.payload),
      };
    case "setValue":
      return {
        value: (prevState) => ({
          // create a copy so we dont mutate directly, also grab the value and change it
          ...prevState,
          value: state.value(action.payload),
        }),
      };
    default:
      return { value: "", isValid: false };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "setIsvalid":
      return {
        isValid: state.isValid(action.payload),
      };
    case "setValue":
      return {
        value: (prevState) => ({
          // create a copy so we dont mutate directly, also grab the value and change it
          ...prevState,
          value: state.value(action.payload),
        }),
      };
    default:
      return { value: "", isValid: false };
  }
}; */

const FormReducer = (state, action) => {
  /* if (action.type === "PW_USER_INPUT") {
    return {
      value: action.payload,
      isValid: action.value.trim().length > 6,
    };
  }
  if (action.type === "PW_INPUT_BLUR") {
    return { value: action.payload, isValid: state.value.trim().length > 6 };
  }

  if (action.type === "EMAIL_USER_INPUT") {
    return { value: action.payload, isValid: action.val.includes("@") };
  }
  if (action.type === "EMAIL_INPUT_BLUR") {
    return { value: action.payload, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
 */
  switch (action.type) {
    case "PW_USER_INPUT":
      return {
        pwValue: action.payload,
      };
    case "PW_INPUT_VALID":
      return { pwValid: action.payload };
    case "EMAIL_USER_INPUT":
      return { emailValue: action.payload };
    case "EMAIL_INPUT_VALID":
      return { emailValid: action.payload };
    default:
      return { pwValue: "", pwValid: false, emailValue: "", emailValid: false };
  }
};

const Login = ({ loginHandler, logoutHandler }) => {
  /// GOOD USECASE FOR USEREDUCER

  const [formIsValid, setFormIsValid] = useState(false);

  /*   const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
   */

  // can use an anonymous function here...
  /*   const [emailState, dispatchEmail] = useReducer(() => { }); */

  /// Rewriting this state example:

  /*
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  */

  /* into a reducer: */

  /*  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  }); */

  /*
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();

  */

  /*  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  }); */

  ///////////////// REWRTITTEN TO A SINGLE FORM REDUCER /////////////////

  const [formState, dispatchForm] = useReducer(FormReducer, {
    pwValue: "",
    EmailValue: "",
    pwIsValid: false,
    EmailIsValid: false,
  });

  // useEffect has one main job, so the setState here does not count
  // as a sideEffect

  //UseEffect can be used to re-run logic, not only run on first render.

  // checking if form is valid by checking both inputs
  useEffect(() => {
    // makeTimeout (debouncer)
    // so we dont run on every keystroke
    const checkFormIsValid = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      /// With formreducer.
      setFormIsValid(formState.emailValid && formState.pwValid);
      /*  setFormIsValid(emailState.isValid && passwordState.isValid); */
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
  }, [emailState, passwordState]);

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
    /* dispatchPassword({
      type: "setValue",
      payload: passwordState.value.trim().length > 6,
    }); */

    dispatchForm({
      type: "PW_INPUT_VALID",
      payload: formState.value.trim().length > 6,
    });
  };

  // checks if entered password includes, setting validation onBlur true or false
  const validateEmailHandler = () => {
    /* dispatchEmail({
      type: "isValid",
      payload: emailState.value.includes("@"),
    }); */
    dispatchForm({
      type: "EMAIL_INPUT_VALID",
      payload: formState.value.includes("@"),
    });
  };

  /////////////////// HANDLERS ///////////////////////

  // sets entered email
  const emailChangeHandler = (event) => {
    /* dispatchEmail({
      type: "setValue",
      payload: event.target.value,
    }); */

    dispatchForm({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  // sets entered password
  const passwordChangeHandler = (event) => {
    /*  dispatchPassword({
      type: "setValue",
      payload: event.target.value,
    }); */
    dispatchForm({
      type: "PW_USER_INPUT",
      val: event.target.value,
    });
  };

  // This only runs if formIsValid
  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler(formState.emailValue, formState.pwValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.EmailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.pwValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <label>Example1</label>
          <input
            type="password"
            id="password"
            value={formState.pwValue}
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
