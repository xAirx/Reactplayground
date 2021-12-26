import { React, useState, useEffect, useRef } from "react";
import Button from "components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import classes from "./AddUsers.modules.css";

const AddUsers = ({
  addUserHandler,
  userNameChangeHandler,
  ageChangeHandler,
  setFormRef,
  userName,
  age,
}) => {
  const formRef = useRef();

  useEffect(() => {
    setFormRef(formRef);
  }, [formRef, setFormRef]);

  //TODO validation logic........
  // Classname on card here is a custom prop, since its not a DOM
  // Element like input or label below.
  // Input and label would be able to take a className and apply it.
  <Card className={classes.input}>
    <form ref={formRef} onsubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        value={userName}
        onChange={userNameChangeHandler}
        required
      />
      <label htmlFor="age">Age(years)</label>
      <input
        id="age"
        type="number"
        name="age"
        value={age}
        onChange={ageChangeHandler}
        required
      />
      <Button type="submit" onClick={addUserHandler} text="AddUser">
        Add User
      </Button>
    </form>
  </Card>;
};

export default AddUsers;
