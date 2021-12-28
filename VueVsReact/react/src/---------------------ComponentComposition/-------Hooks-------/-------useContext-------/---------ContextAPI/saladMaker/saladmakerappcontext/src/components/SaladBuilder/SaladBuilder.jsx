import SaladItem from "../../components/SaladItem/Saladitem";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

const SaladBuilder = () => {
  const ingredients = [
    {
      image: "🍎",
      name: "apple",
    },
    {
      image: "🥑",
      name: "avocado",
    },
    {
      image: "🥦",
      name: "broccoli",
    },
    {
      image: "🥕",
      name: "carrot",
    },
    {
      image: "🍷",
      name: "red wine dressing",
    },
    {
      image: "🍚",
      name: "seasoned rice",
    },
  ];

  /*   const [saladIngredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(ingredients);
  }, [ingredients]);
 */

  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        {ingredients ? (
          ingredients.map((ingredient) => (
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
