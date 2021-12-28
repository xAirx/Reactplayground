import { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { UserContext } from "../User/User";
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

export default function SaladItem({ image, name }) {
  const classes = useStyles();
  const { salad, setSalad } = useContext(SaladContext);
  const user = useContext(UserContext);
  const favorite = user.favorites.includes(name);
  const [chosenSalad, setChosenSalad] = useState(salad);
  const currentContext = salad;

  /*  useEffect(() => {
    setSalad(() => {
      console.log(
        "THIS IS SALAD NOW in internal state, setting SetSalad with",
        chosenSalad
      );

      console.log("THIS IS OUR NEW OBJECT", salad.concat(chosenSalad));
      return salad.concat(chosenSalad);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenSalad]);

  useEffect(() => {
    console.log("THIS IS SALAD NOW in internal state", salad);
  }, [chosenSalad]);

  useEffect(() => {
    console.log("THIS IS SALAD NOW IN CONTEXT", salad);
  }, [salad]); */

  const setSaladContext = () => {
    console.log("THIS IS THE NEW SALAD ITEM", name);
    setSalad(
      // setting state in a functional manner, getting the previous state,
      // this is the shallow reference to the prevSalad object.
      (prevSalad) =>
        // map prevSalad find name match.
        // match new name
        prevSalad.map((prevSaladName) => prevSaladName.name === name)
          ? // overwrite state with same state
            prevSalad
          : // set state with new state object
            /* salad.concat({ name, id: `${name}-${Math.random()}` }) */
            prevSalad.concat({ name, id: `${name}-${Math.random()}` })
    );
  };

  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>
      <span
        className={classes.favorite}
        aria-label={favorite ? "Favorite" : "Not Favorite"}
      >
        {favorite ? "😋" : ""}
      </span>
      <button className={classes.add} onClick={setSaladContext}>
        <span className={classes.image} role="img" aria-label={name}>
          {image}
        </span>
      </button>
    </div>
  );
}
