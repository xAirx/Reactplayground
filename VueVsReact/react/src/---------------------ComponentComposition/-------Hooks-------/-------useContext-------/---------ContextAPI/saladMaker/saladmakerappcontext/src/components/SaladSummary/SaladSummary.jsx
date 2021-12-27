import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { SaladContext } from "../SaladMaker/SaladMaker";

function SaladSummary() {
  const classes = createUseStyles();
  const salad = useContext(SaladContext);
  return (
    <div className={classes.wrapper}>
      <h2>Your salad</h2>
      <ul className={classes.list}>
        {salad.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SaladSummary;
