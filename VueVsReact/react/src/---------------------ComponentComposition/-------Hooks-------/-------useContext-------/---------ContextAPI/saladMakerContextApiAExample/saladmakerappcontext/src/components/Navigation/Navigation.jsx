import React from "react";
import { createUseStyles } from "react-jss";
import { useUser } from "../Hooks/UseContext";

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: "1px solid #ccc",
    padding: "10px",
    textAlign: "right",
  },
});

// With JSS you can style objects in the component rather than a CSS file.

export default function Navigation() {
  const { user } = useUser();

  const classes = useStyles();
  return <div className={classes.wrapper}>Welcome, {user.name}</div>;
}
