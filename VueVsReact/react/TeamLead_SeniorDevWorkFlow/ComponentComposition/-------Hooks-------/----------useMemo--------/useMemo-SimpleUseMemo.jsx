/* From time to time React components have to perform expensive calculations. For example, given a big list of employees and a search query, the component should filter the employees' names by the query.

In such cases, with care, you can try to improve the performance of your components using the memoization technique.


const memoizedResult = useMemo(compute, dependencies);

During initial rendering useMemo(compute,dependencies) invokes compute
And memoizes the calculation result, and returns it to the component

If during the next renderings the dependencies dont change
Then useMemo does not invoke the compute function but
Returns the memoized value.

If the dependencies change during re-rendering
Then usememo invokes compute memoizes the new value and retursn it.

Thats the essence of the useMemo() Hook.


If your computation callback uses props or state values, then be sure to indicate these values as dependencies:

const memoizedResult = useMemo(() => {
  return expensiveFunction(propA, propB);
}, [propA, propB]); */

//dmitripavlutin.com/react-usememo-hook/

// Example 1:

/*
Every time you change the input value, the factorial is calculated factorialOf(n) and 'factorialOf(n) called!' is logged to console.

On the other side, each time you click Re-render button, inc state value is updated. Updating inc state value triggers <CalculateFactorial /> re-rendering. But, as a secondary effect, during re-rendering the factorial is recalculated again — 'factorialOf(n) called!' is logged to console.

How can you memoize the factorial calculation when the component re-renders? Welcome useMemo() hook!

By using useMemo(() => factorialOf(number), [number]) instead of simple factorialOf(number), React memoizes the factorial calculation.
Let's improve <CalculateFactorial /> and memoize the factorial calculation: */

import { useState, useMemo } from "react";
export function CalculateFactorial () {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  // this sets number from input field and re-renders component as it should
  // Running the factorial function every time the input field changes.
  // factorial is calculated, but since useMemo handles the reference of the number prop
  // it wont run the factorial function if the number has not changed.

  // This is good because if something else changes in the component like the inc
  // State the component will re-render aswell, running the factorial function
  // these are wasted renders.

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
function factorialOf (n) {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

/* Every time you change the value of the number, 'factorialOf(n) called!' is logged to console.
That's expected.

However, if you click Re-render button, 'factorialOf(n) called!' isn't logged to console because useMemo(() => factorialOf(number), [number]) returns the memoized factorial calculation. Great!
 */







// Example 2:

function User ({ age }) {
  //Ucontrolled
  const [name, setName] = useState();
  //Controlled
  // we always want an empty string into our inputs
  // instead of null or undefined.
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

  // Making a user object but making sure the references are OK.
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

  // THE USER OBJECT ABOVE WILL BE THE SAME AS IN OUR USEEFFECT
  // the old object from last render, and same reference
  // this is why useEffect works properly here.

  // Pass by reference vs Pass by value

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
        onClick={setDark((currDark) => !currDark)}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default user;
