/* Context API

It's way more ergonomic, it's no longer "experimental," and it's now a first-class API! OH, AND IT USES A RENDER PROP!



Focus:

Passing data from parent to child components, at any nesting level seamlessly, redux also uses this feature to provide its global state management with its store.



Explanation:


Using Context, we pass the data from parent component to Child component and from Child to Parent which are placed at different nesting levels.

One of the great things about context is that it supports both the usage of render props and HOC’s

“you could easily implement a Higher Order Component or something else using the context API(which is why it's the best).”


The new context API consists of three main parts:

    • React.createContext which is passed the initial value (and optionally a fancy opt-out function that uses a bitmask). This returns an object with a Provider and a Consumer

    • The Provider component is used higher in the tree and accepts a prop called value (which can be anything).

    • The Consumer component is used anywhere below the provider in the tree and accepts a prop called "children" which must be a function that accepts the value and must return a react element (JSX).




Solves:

It solves a common problem known as the prop-drilling problem where props would need to be passed down to multiple components in the tree to reach the component that needs it.





Use-cases:

So why use context?

Have you ever experienced the pain of trying to get state from the top of your react tree to the bottom?

This pain you're feeling is called "prop drilling" and it's super annoying.

You wind up having to pass props through components that don't care about the data just so you can send it down to components that do care. And as you move components around this pain is magnified.



So this is where state management libraries like redux come into play (specifically react-redux).

They allow you to get data from the store easily anywhere in the tree.


All you have to do is use this thing called a < Provider /> and magically your store data is accessible by any component that is "connected."

The provider component puts the data into context, and the connect Higher Order Component pulls the data out of context.

So in reality, redux isn't allowing your data to be accessible anywhere... context is!



So, why should you use context?

Well, you probably already are and loving it! Even if you're not using context directly, your app is making use of it via react-redux, MobX-react, react-router, glamorous, and more!




Utilizes:

Solves: React Context solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.




Disadvantages :

For low - frequency updates like locale or theme changes or user authentication, the React Context is perfectly fine.

But with a more complex state object like products in the shopping cart which has high - frequency updates, the React Context won't be a good solution.
Because, the React Context will trigger a re-render on each update, and optimizing it manually can be really tough



Composing Providers and Consumers Together properly (avoiding deep nesting)
One question that I've seen a lot about the new context API (or the render prop pattern in general) is how to compose providers and consumers together.

When you put a bunch of render prop components together in a single render method, things can get... nested:

So what can we do to avoid this? If it bothers you, then you can solve it the same way you solve the problem in regular JavaScript: utility functions/components. Here's an example:


Example:
The goal here is to take common use cases and make special functions/components to make those use cases more ergonomic. Just like you do in regular JavaScript! Makes sense right? */

/* Simple steps to use the context API

    • Use const ___Context = React.createContext() to create context.

    • Pull ___Context.Provider and ___Context.Consumer out of ___Context

    • Wrap Provider around your parent component.

    • A class can consume with static contextType = ___Context

    • A functional component can consume with const x = useContext(___Context)
 */

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ContextAPI = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
      <h1>{theme}</h1>
    </div>
  );
};

export default ContextAPI;
