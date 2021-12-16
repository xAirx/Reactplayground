import { useEffect } from "react";

/* InitialState and Uncontrolled vs Controlled
 */
// if we do not set the inital value of the state, it will be undefined
// and the component will not render
// because our input below expects a value from the state
// when you do not pass an initial val
// your component is uncontrolled.
// When you run an onchange along side an undefined value
// it will throw an error
// saying that we are changing an uncontrolled component
// to be controlled.
// So we need to set the initial value of the state
// to be the value of the input
// so that we can use it in the onchange

/*   This means that if we pass an empty String
    we are going from uncontrolled to controlled
    and now react can control our component and the browser do its thing
  */

function User({ age }) {
  //Ucontrolled
  const [name, setName] = useState();
  //Controlled
  // we always want an empty string into our inputs
  // instead of null or undefined.
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);

  const buttonStyle = {
    backgroundColor: dark ? "#000" : "initial",
    color: dark ? "#FFF" : "initial",
  };

  // every time we render
  // a new user object is created
  // even if its the same values within
  // its a different reference than before.
  // everything in the component is recreated

  const user = useMemo(() => {
    // whenever age or name changes
    // we want memo to run
    // and give us a new user object
    // if name and age does not change
    // when this component renders again
    // memo will return the old reference
    // of the user object
    // and we will not be creating a new user object
    // and we will be using the old user object
    // instead of creating a new one.
    // this is called memoization

    return { age, name };
  }, [age, name]);

  // Without a dependency array and we click our darkmode button
  // the input state is updated every time.
  // This is because we are not passing an array of dependencies

  // Wont watch for changed on age,name variable.
  useEffect(() => {
    console.log(user);
  }, []);

  // Fix:
  useEffect(() => {
    //react will say why we dont have user
    // in the DP array
    // but we are looking at age and name
    // which is basically the same thing.
    console.log(user);
  }, [age, name]);

  // this is bad practice again using the destructured values of user
  // Imagine the user prop is passed in from a component
  // much higher up in the component tree

  // We would need to remember what to watch for
  // and change in the component here.
  // This is why its better just to watch the user PROP

  // Fix:
  useEffect(() => {
    //react will say why we dont have user
    // in the DP array
    // but we are looking at age and name
    // which is basically the same thing.
    console.log(user);
  }, [user]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        style={buttonStyle}
        onClick={() => setDark((currDark) => !currDark)}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default user;
