import React, { useReducer } from "react";
import "./styles.css";

const USER_UPDATE = "USER_UPDATE";
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const FILTER_USER = "FILTER_USER";

const initState = { users: [], filter: "", user: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_USER:
      return {
        ...state,
        filter: action.payload, // we'll just update the filter key
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const filteredUsers = state.users.filter(
          user =>
            state.filter === "" || user.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1 // we filter our users by our string, or if it's empty, we'll return it.
        )
  }

  const userUpdate = e => {
    const { value } = e.target;
    dispatch({ type: USER_UPDATE, payload: value });
  };
  const
  const addNewUser = () => dispatch({ type: ADD_USER });
  const removeUser = i => dispatch({ type: REMOVE_USER, payload: i });
  const handleFilter = e =>
    dispatch({ type: FILTER_USER, payload: e.target.value });
  const renderUsers = filteredUsers.map((user, i) => (
    <li
      key={i}
    >
      <button
        onClick={() => removeUser(i)}
      >
        x
      </button>
      <p style={{}}>{user}</p>
    </li>
  ));
  return (
    <div className="App">
      <pre>{state.user}</pre>
      <input placeholder="Enter a name" onChange={userUpdate} />
      <button onClick={addNewUser}>Add</button>
      <hr />
      <input placeholder="Filter name" onChange={handleFilter} />
      <ul style={{ listStyle: "none" }}>{renderUsers}</ul>
    </div>
  );
}