import React, { useState, createContext } from "react";
import { createUseStyles } from "react-jss";
import SaladBuilder from "../SaladBuilder/SaladBuilder";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

export const SaladContext = createContext();

export default function SaladMaker() {
  const classes = useStyles();
  const [salad, setSalad] = useState([
    {
      name: "carrot",
      id: `${"carrot"}-${Math.random()}`,
    },
  ]);
  return (
    <SaladContext.Provider value={{ salad, setSalad }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">
          🥗{" "}
        </span>
        Build Your Custom Salad!
        <span role="img" aria-label="salad">
          {" "}
          🥗
        </span>
      </h1>
      <SaladBuilder />
    </SaladContext.Provider>
  );
}
