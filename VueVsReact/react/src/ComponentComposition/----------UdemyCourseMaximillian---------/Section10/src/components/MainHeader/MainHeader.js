import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = ({ isAuthenticated, logoutHandler }) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} l ogoutHandler={logoutHandler} />
    </header>
  );
};

export default MainHeader;
