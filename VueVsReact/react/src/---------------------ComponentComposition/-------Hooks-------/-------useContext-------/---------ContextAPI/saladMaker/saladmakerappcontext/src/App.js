import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SaladMaker from "./components/SaladMaker/SaladMaker";
import SaladBuilder from "./components/SaladBuilder/SaladBuilder";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

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

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navigation />
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
      <SaladBuilder ingredients={ingredients} />
    </div>
  );
}

export default App;

/*
This means that you can share information between a parent component and a deeply
nested child component, or store site - wide data in a single place and access them
anywhere in the application.

You can even update data from nested components by providing update functions
along with the data.

React context is flexible enough to use as a centralized state management system
for your project, or you can scope it to smaller sections of your application.

With context, you can share data across the application without any additional third -
party tools and with a small amount of configuration.

This provides a lighter weight alternative to tools like Redux, which can help with
larger applications but may require too much setup for medium - sized projects.


Start by hard - coding all the data so that you can work out the structure of your app.
Later, you’ll add in the context starting in the next step.
Context provides the most value as applications start to grow, so in this step
you’ll build several components to show how context works across a component tree.

For smaller components or libraries, you can often use wrapping components and
lower level state management techniques, like React Hooks and class-based management. */
