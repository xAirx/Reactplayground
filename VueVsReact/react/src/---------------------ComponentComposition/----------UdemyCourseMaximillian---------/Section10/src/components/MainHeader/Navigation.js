import React from "react";
import classesButton from "./Button.module.css";
import classes from "./Navigation.module.css";
import Button from "../UI/Button/Button";

const Navigation = ({ isLoggedIn, logoutHandler }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Button
              type="button"
              className={classesButton.btn}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
