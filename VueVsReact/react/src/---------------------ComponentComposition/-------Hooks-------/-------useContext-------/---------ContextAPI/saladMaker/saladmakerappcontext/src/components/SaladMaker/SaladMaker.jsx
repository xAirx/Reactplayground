import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: "10px",
    textAlign: "center",
  },
});

const SaladMaker = ({ chosenSalad }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1>Your Custom Salad</h1>
      {chosenSalad}
    </div>
  );
};

export default SaladMaker;
