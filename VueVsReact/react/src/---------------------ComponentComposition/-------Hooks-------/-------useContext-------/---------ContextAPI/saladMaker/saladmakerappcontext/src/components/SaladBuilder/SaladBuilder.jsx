import SaladItem from "../../components/SaladItem/Saladitem";
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
      id: 0,
      image: "🍎",
      name: "apple",
    },
    {
      id: 2,
      image: "🥑",
      name: "avocado",
    },
    {
      id: 3,
      image: "🥦",
      name: "broccoli",
    },
    {
      id: 4,
      image: "🥕",
      name: "carrot",
    },
    {
      id: 5,
      image: "🍷",
      name: "red wine dressing",
    },
    {
      id: 6,
      image: "🍚",
      name: "seasoned rice",
    },
  ];

  const classes = useStyles();

  // tabbing context instead of adding into component

  return (
    <>
      <div className={classes.wrapper}>
        {ingredients ? (
          ingredients.map((ingredient) => (
            <SaladItem
              id={ingredient.id}
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
