import React, { useReducer, createContext } from "react";
import { createUseStyles } from "react-jss";
import SaladBuilder from "../Saladbuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";

const useStyles = createUseStyles({
  wrapper: {
    padding: "10px",
    textAlign: "center",
    borderTop: "1px solid #ccc",
  },
});

export const SaladContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

const SaladMaker = ({ chosenSalad }) => {
  const [salad, setSalad] = useReducer(reducer, []);
  const classes = useStyles();

  return (
    <SaladContext.Provider value={[salad, setSalad]}>
      <div className={classes.wrapper}>
        <SaladBuilder />
        <SaladSummary />
      </div>
    </SaladContext.Provider>
  );
};

export default SaladMaker;
