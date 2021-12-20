https://www.pragimtech.com/blog/reactjs/usecontext-hook-in-react/


https://www.pragimtech.com/blog/reactjs/usecontext-part-2-in-react/


https://www.digitalocean.com/community/tutorials/react-usecontext

/*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

Context is primarily used when some data needs to be accessible by many components at different nesting levels.
 */




/* useContext

const value = useContext(MyContext);

Accepts a context object(the value returned from React.createContext) and returns the current context value for that context.

The current context value is determined by the value prop of the nearest < MyContext.Provider > above the calling component in the tree.

When the nearest < MyContext.Provider > above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.

Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

    Don’t forget that the argument to useContext must be the context object itself:


	• Correct: useContext(MyContext)
	• Incorrect: useContext(MyContext.Consumer)
	• Incorrect: useContext(MyContext.Provider)

A component calling useContext will always re - render when the context value changes.
If re - rendering the component is expensive, you can optimize it by using memoization.

	Tip

	If you’re familiar with the context API before Hooks, useContext(MyContext) is equivalent to static contextType = MyContext in a class, or to <MyContext.Consumer>.
    useContext(MyContext) only lets you read the context and subscribe to its changes.
    You still need a < MyContext.Provider > above in the tree to provide the value for this context.

Putting it together with Context.Provider */


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const ThemeContext = React.createContext(themes.light);
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {

    const theme = useContext(ThemeContext);

    return (
    <button style={{
        background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
    </button>);
}


/*
Example Context

Let’s take a look at how to access context with the useContext Hook.  */

const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312"
};

export const ColorContext = React.createContext(colors.blue);

/* Provide Context

Then, we can provide our context to whatever branch needs it.
 In this instance, we create colors for the entire app, so we will wrap it in our App:
 */

import { ColorContext } from "./ColorContext";
function App() {
  return (
    <ColorContext.Provider value={colors}>
      <Home />
    </ColorContext.Provider>
  );
}

/* This provides the context to the rest of the component(represented by the Home component).
No matter how far a component is away from the Home component, as long as it is somewhere in the component tree, it will receive the ColorContext.
There are various ways of consuming our context in any component wrapped with our provider. */

/*
Consume Context

We can use <Consumer> which is available in both class-based and functional components. It would look something like this to use in your JSX: */

return (
  <ColorContext.Consumer>
    {colors => <div style={colors.blue}>...</div>}
  </ColorContext.Consumer>
);


/* Yet, consuming our context this way is only available in the return block so can’t be accessed outside of your JSX code.

Of course, there are workarounds, but it isn’t going to be the most ideal.

You can give your component a context type: MyComponent.contextType = ColorContext; then, you can access the context in your component:

let context = this.context; and that allows you to access your context outside of the JSX.

Or instead, you could put in static contextType = ColorContext;.

This works pretty good for class- based components, since it simplifies how to bring your context into your component.

But, it will not work in a functional component. */








/* Enter useContext

useContext is the same as static contextType = ColorContext, except that it’s for a functional component. At the top of your component, you can use it like this:
 */

import React, { useContext } from "react";

const MyComponent = () => {
  const colors = useContext(ColorContext);
return <div style={{ backgroundColor: colors.blue }}>...</div>;
};

/*
Now your component is simple, easy to read, and easy to test.

useContext is as simple as that 🤓.
Make sure here that you aren’t passing ColorContext, Consumer to useContext, we want the entire context here, not the provider or consumer.

    Also, instead of wrapping your JSX in a Consumer, you no longer need to in order to access your context.

    useContext will do that for you.
 */