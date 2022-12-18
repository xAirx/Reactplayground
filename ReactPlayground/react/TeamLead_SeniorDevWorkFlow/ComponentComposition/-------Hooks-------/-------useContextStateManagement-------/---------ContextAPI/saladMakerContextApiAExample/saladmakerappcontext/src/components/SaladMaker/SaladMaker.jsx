import { createUseStyles } from "react-jss";
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";
import SaladProvider from "../Hooks/SaladProvider";
const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

/* A context provider can be thought of as a component that exposes an API to it's children -
that's all it is.From that, you can decide what happens internally and what the API signature
is you expose. */

export default function SaladMaker() {
  const classes = useStyles();
  return (
    <SaladProvider>
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
      <SaladSummary />
    </SaladProvider>
  );
}
