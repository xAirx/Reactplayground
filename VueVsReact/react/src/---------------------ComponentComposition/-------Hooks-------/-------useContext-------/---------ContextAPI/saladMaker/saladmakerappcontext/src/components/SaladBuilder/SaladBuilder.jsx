import SaladItem from "../../components/SaladItem/Saladitem";
import { useState, useEffect, useContext } from "react";
import SaladMaker from "../../components/SaladMaker/SaladMaker";
import { createUseStyles } from "react-jss";
import { SaladContext } from "../SaladMaker/SaladMaker";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

const SaladBuilder = ({ ingredients }) => {
  const [saladIngredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(ingredients);
  }, [ingredients]);

  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        {saladIngredients ? (
          saladIngredients.map((ingredient) => (
            <SaladItem
              key={ingredient.name}
              image={ingredient.image}
              name={ingredient.name}
            />
          ))
        ) : (
          <h1>No ingredients Set yet</h1>
        )}
      </div>
    </>
  );
};

export default SaladBuilder;
