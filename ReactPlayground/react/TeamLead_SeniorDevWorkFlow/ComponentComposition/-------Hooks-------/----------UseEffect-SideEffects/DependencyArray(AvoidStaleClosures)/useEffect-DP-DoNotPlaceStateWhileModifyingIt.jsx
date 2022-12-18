/////////////////////////////////////////Problem: /////////////////////////////////////////
/* When size updated, the side effect will change the size name based on width,height.
https://stackoverflow.com/questions/62979323/how-can-react-useeffect-watch-and-update-state

The goal is to make state consistent, so I will always get the correct shape no matter how size changes.
But got problem

The useEffect function got into a loop, if I remove the 'state' dependence it will be good,
    but the intelliSense requested 'state' dependence, so what's the solution? */

export function useShape() {
  const [state, setState] = useState({
    shape: "square",
    size: {
      width: 100,
      height: 100,
    },
  });

  // Change shape name while size update
  useEffect(() => {
    const {
      size: { width, height },
    } = state;

    setState({
      ...state,
      shape: width === height ? "square" : "rect",
    });
  }, [state, state.size]);
}

////////////////////////////////////////// Solution ////////////////////////////////////////////////////////

/*
The infinite loop is due to placing "state" as a dependency while modifying the state itself in useEffect.

The solution is to decouple your state, by keeping your view variable separate from your controlled variables.

this is how you can define your useShape hook. */

function useShape() {
  const [shape, setShape] = useState("square");
  const [dimension, setDimension] = useState({
    width: 100,
    height: 100,
  });

  // Change shape name while size update
  useEffect(() => {
    const { height, width } = dimension;

    setShape(height === width ? "square" : "react");
  }, [dimension, dimension.height, dimension.width]);

  return [shape, setDimension];
}

/* this way you can expose your Dimension setter, and you view variable as independent Pieces.
 */
