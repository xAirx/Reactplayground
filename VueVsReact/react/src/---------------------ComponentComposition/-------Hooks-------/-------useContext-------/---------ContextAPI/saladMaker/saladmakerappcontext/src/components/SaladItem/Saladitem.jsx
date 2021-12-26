import { useRef, useContext } from "react";
import { createUseStyles } from "react-jss";
import UserContext from "./components/User/User";
import { SaladContext } from "../SaladMaker/SaladMaker";

const useStyles = createUseStyles({
  add: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  favorite: {
    fontSize: 20,
    position: "absolute",
    top: 10,
    right: 10,
  },
  image: {
    fontSize: 80,
  },
  wrapper: {
    border: "lightgrey solid 1px",
    margin: 20,
    position: "relative",
    textAlign: "center",
    textTransform: "capitalize",
    width: "33%",
  },
});

const reducer = (key) => +1;

const SaladItem = ({ image, name, chooseSalad }) => {
  const user = useContext(UserContext);
  const favorite = user.favorites.includes(name);

  const saladRef = useRef();
  const classes = useStyles();

  return (
    <div ref={saladRef} className={classes.wrapper}>
      <h3>{user.name}</h3>
      <span
        className={classes.favorite}
        aria-label={favorite ? "Favorite" : "Not Favorite"}
      >
        {favorite ? "😋" : ""}
      </span>
      <button className={classes.add}>
        <span className={classes.image} role="img" aria-label={name}>
          {image}
        </span>
      </button>
    </div>
  );
};

export default SaladItem;
