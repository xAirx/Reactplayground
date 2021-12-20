import SaladItem from "../../components/SaladItem/Saladitem";
import { useState, useEffect } from "react";
import SaladMaker from "../../components/SaladMaker/SaladMaker";
import { createUseStyles } from "react-jss";

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
  const [chosenSalad, setChosenSalad] = useState();

  // Callback from saladItem setting chosenSalad.
  const chooseSalad = (salad) => {
    // get Salad på DOMREF? (useref)?
    setChosenSalad(salad);
  };

  useEffect(() => {
    setIngredients(ingredients);
  }, [ingredients]);

  const testChosenSalad = "test";

  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        {ingredients.map((ingredient) => (
          <SaladItem
            key={ingredient.name}
            image={ingredient.image}
            name={ingredient.name}
            chooseSalad={chooseSalad}
          />
        ))}
      </div>
      <SaladMaker chosenSalad={testChosenSalad} />
    </>
  );
};

export default SaladBuilder;
