import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import classesButton from "./Button.module.css";

const Home = ({ logoutHandler }) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {/* // make logout button with generic button. */}
      <Button
        type="button"
        className={classesButton.btn}
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </Card>
  );
};

export default Home;
