/* https://www.richardkotze.com/coding/hoc-vs-render-props-react

Focus: Data Manipulation


Explanation: a HOC is like a man in the middle between parent and child component, reading props, changing them, adding props, fetching data, etc.



You can use it in any way you want. Basically what it does is:

	1. Take a component as argument

	2. Return something — this can be anything. Literally anything. You can completely disregard the original component and render something completely new.

What you want to do is up to your imaginations. In short, HOC helps you organise your codebase in a much better way and to decrease code redundancy.

Even Redux uses HOC. The connect statement that you have come across is a HOC that does so many things with the original component.

If you see the same code is written in many places in your codebase there might be a chance to move this to a HOC and make your codebase a lot cleaner.


Higher-order components

Soon HOC evolved into the picture to support code reuse.

Essentially these are similar to the decorator pattern, a function that takes a component as the first parameter and returns a new component.

This is where you apply your crosscutting functionality.
Example of higher-order component:


function withExample(Component) {
  return function(props) {
    // cross cutting logic added here
    return <Component {...props} />;
  };
}

To find out more, read my post on understanding higher-order components.


What does HOC solve?

	• Importantly they provided a way to reuse code when using ES6 classes.

	• No longer have method name clashing if two HOC implement the same one.

	• It is easy to make small reusable units of code, thereby supporting the single responsibility principle.

	• Apply multiple HOCs to one component by composing them. The readability can be improve using a compose function like in Recompose.



Advantages:

    • Functional programming and higher order functions

    • A higher order function is a function that accepts another function as an argument. You would have already used the map function which falls under this category.

    • This is a concept that is derived from the world of functional programming. But why use a functional programming concept in React?

    • The goal of this pattern is to decompose the logic into simpler and smaller functions that can be reused.

    • A rule of thumb is a function does just one task and does it well.

    • This also avoids side effects ( changing anything that is not owned by the function ) , and makes debugging and maintenance a whole lot easier.




Disadvantages :

	• Creates a wrapper around components, allocating a new function and taking up space in the tree when debugging

	• Higher-order function composition doesn’t always work inline with JSX, depending on what you’re trying to do.

    • Higher-order components come with new problems:

	• Boilerplate code like setting the displayName with the HOC function name e.g. (withHOC(Component)) to help with debugging.

	• Ensure all relevant props are passed through to the component.

	• Hoist static methods from the wrapped component.

	• It is easy to compose several HOCs together and then this creates a deeply nested tree making it difficult to debug.

    • You can start to see similarities in the downsides for both mixins and HOC:

	• There is still an indirection issue, however, not about which HOC is changing the state but which one is providing a certain prop.

	• It is possible two HOC could be using the same prop meaning one would overwrite the other silently.





When are higher order components useful within react?

    •  Higher-Order components are useful for cases where you want to reuse a certain logic across multiple components.

    •  With that, it is possible to include a conditional rendering inside the higher-order component, such that the component that is returned is dependent on the result of the condition.





What are higher order components?

    •  As you build React applications, you will run into situations where you want to share the same functionality across multiple components.

    •  For example: you need to manage the state of currently logged in users in your application.

    •  Instead of managing that state across all of the components that need that state, you could create a higher-order component

    •  to separate the logged in user state into a container component, then pass that state to the components that will make use of it.





How do Higher-Order Components Work?

    •  The React docs say that higher-order components take a component and return a component.





What is the situation for the components receiving state from the HOC?

    • The components that receive state from the higher-order component will function as presentational components.

    • State gets passed to them and they conditionally render UI based on it. They do not bother with the management of state.





Examples of Higher Order components:

    Examples:
        • React-Redux uses an HOC called connect to map store state to props
        • React-Router’s withRouter HOC provides route context to components needing access to history APIs





Let’s see another example.

    • Say you have three JSON files in your application. These files contain different data that will be loaded in your application in three different components.

    • You want to give your users the ability to search the data loaded from these files. You could implement a search feature in all three of the components.

    • This duplication may not be an issue at first, but as your application grows and more components need this functionality, the constant duplication will be cumbersome and prone to problems.

    • A better way forward is to create a higher-order component to handle the search functionality.

    • With it, you can wrap the other components individually in your higher-order component.
