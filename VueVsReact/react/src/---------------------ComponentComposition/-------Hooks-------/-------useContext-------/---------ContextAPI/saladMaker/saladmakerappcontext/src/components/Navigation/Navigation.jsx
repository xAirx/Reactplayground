import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: "1px solid #ccc",
    padding: "10px",
    textAlign: "right",
  },
});

// With JSS you can style objects in the component rather than a CSS file.

export default function Navigation() {
  const classes = useStyles();
  return <div className={classes.wrapper}>Welcome, Kwame</div>;
}
