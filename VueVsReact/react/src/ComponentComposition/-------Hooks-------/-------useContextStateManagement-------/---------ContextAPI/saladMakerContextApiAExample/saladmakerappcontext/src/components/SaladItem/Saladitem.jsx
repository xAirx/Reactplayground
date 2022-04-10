import { createUseStyles } from "react-jss";
import { useSalad } from "../Hooks/UseContext";
import { useUser } from "../Hooks/UseContext";

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

export default function SaladItem ({ image, name, id }) {
  const classes = useStyles();
  const { user } = useUser();
  const favorite = user.favorites.includes(name);
  const { addSalad } = useSalad();

  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>
      <span
        className={classes.favorite}
        aria-label={favorite ? "Favorite" : "Not Favorite"}
      >
        {favorite ? "😋" : ""}
      </span>
      <button
        className={classes.add}
        onClick={() =>
          addSalad({
            name,
            id,
          })
        }
      >
        <span className={classes.image} role="img" aria-label={name}>
          {image}
        </span>
      </button>
    </div>
  );
}
