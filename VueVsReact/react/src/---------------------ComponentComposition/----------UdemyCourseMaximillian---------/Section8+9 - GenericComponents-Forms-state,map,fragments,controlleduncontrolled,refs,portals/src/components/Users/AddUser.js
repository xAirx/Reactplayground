import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  ////////////////// INSTEAD OF USING STATE TO GET THE VALEUS WE USE REFS ////////
  /* const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(""); */
  const [error, setError] = useState();

  // is always an object with a current prop.
  // the current prop holds the actual value
  // the real dom node is stored
  // the dom should only be manipulated by react
  // but reading the value is good practice
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  console.log(nameInputRef.current); // "max" if thats inputted in input

  const addUserHandler = (event) => {
    event.preventDefault();
    //Simple validation
    // using Refs for validation to get the real current value, and not the state value
    const enteredUsernameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;

    /*  if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) { */
    if (
      enteredUsernameRef.trim().length === 0 ||
      enteredAgeRef.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    //Simple validation
    /* if (+enteredAge < 1) { */
    if (+enteredAgeRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    /////////////// LIFTING STATE UP SO WE CAN USE IT IN THE USERSLIST COMPONENT FROM THE APP COMPONENT /////////////////////

    /*     onAddUser(enteredUsername, enteredAge);
     */

    onAddUser(enteredUsernameRef, enteredAgeRef);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    /* setEnteredUsername("");
      setEnteredAge(""); */
  };

  /* const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; */

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            /*   value={enteredUsername} */
            ref={nameInputRef}
            /*   onChange={usernameChangeHandler} */
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            /*  value={enteredAge} */
            ref={ageInputRef}
            /*  onChange={ageChangeHandler} */
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
