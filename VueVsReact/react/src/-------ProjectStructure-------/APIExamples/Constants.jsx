
//Examples.jsexport
const POSTURL = "http://localhost:4000/api/v1/patterns"
export const DELETEURL = "http://localhost:4000/api/v1/patterns/"
export const DeleteButton = require('../images/delete-icon.png')
export const LoadingWheel = require('../images/loading-wheel.gif')

export * from "filenameabove";



/**
 * ActionTypes.tsx
 */

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const THEME = "THEME";
// const LOGIN = "LOGIN"
// const LOGIN = "LOGIN"

export default Object.freeze({ LOGIN, LOGOUT, THEME });
export { LOGIN, LOGOUT, THEME };




// Example implementation and usage

import { useContext } from "react";
import { LOGIN, LOGOUT } from "../state/ActionTypes";
import { AppContext } from "../state/AppProvider";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const { user } = state;
  const hendleLogin = () => {
    dispatch({
      type: LOGIN,
      payload: { active: true, username: "Mike" },
    });
    console.log(state);
  };
  const hendleLogout = () => {
    dispatch({
      type: LOGOUT,
      payload: { username: "", active: false },
    });
  };
  return (
    <div className="home-container">
      <p>{user.active ? user.username : "No user"}</p>
      <div>
        <button
          className="login"
          {...(user.active ? { disabled: true } : { disabled: false })}
          onClick={hendleLogin}
        >
          Login
        </button>
        <button
          className="logout"
          {...(!user.active ? { disabled: true } : { disabled: false })}
          onClick={hendleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;