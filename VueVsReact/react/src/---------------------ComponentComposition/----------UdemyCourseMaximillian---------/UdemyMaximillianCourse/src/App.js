import React from "react";
import AddUsers from "./components/UI/AddUsers/AddUsers";
import UsersList from "./components/Users/UsersList";
import UUID from "uuid";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [userName, setUsername] = useState("");
  const [formRef, setFormRef] = useState(null);
  const [usersArray, setUsersArray] = useState([]);

  const resetInputFields = () => {
    formRef.current.reset();
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    // guardClause
    if (userName.trim.length === 0 || age.trim().length === 0) {
      return;
    }

    // comparing a string to a number
    // is OK with JS but, we should convert age string to a number
    // This is done with the + sign infront
    if (+age < 1) {
      return;
    }

    const userArray = [{ id: UUID(), username: userName, age: age }];
    console.log(userArray);
    setUsersArray(userArray);
    resetInputFields();
    //or do
    // setEnteredUsername("");
    // setEnteredAge("");
    // logic to add user, to wherevever
  };

  const userNameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <AddUsers
        onSubmit={addUserHandler}
        userNameChangeHandler={userNameChangeHandler}
        agechangeHandler={ageChangeHandler}
        setFormRef={() => setFormRef}
        userName={userName}
        age={age}
      />
      {/* making sure to pass prop so we dont get pass undefined */}
      <UsersList users={usersArray} />
    </div>
  );
}

export default App;
