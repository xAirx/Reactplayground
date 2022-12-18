/*
Why Hooks?

We know that components and top - down data flow help us organize a large UI into small, independent, reusable pieces.However, we often can’t break complex components down any further because the logic is stateful and
can’t be extracted to a function or another component.

Sometimes that’s what people mean when they say React doesn’t let them “separate concerns.”

Hooks apply the React philosophy (explicit data flow and composition) inside a component, rather than just between the components. That’s why I feel that Hooks are a natural fit for the React component model.

Unlike patterns like render props or higher - order components, Hooks don’t introduce unnecessary nesting into your component tree.They also don’t suffer from the drawbacks of mixins.

One of the main reasons hooks were added to React is to offer a more powerful and expressive way to write (and share) functionality between components.

These cases are very common and include animations, form handling, connecting to external data sources, and many other things we want to do from our components.
When we try to solve these use cases with components alone.


    we usually end up with:

        • Huge components that are hard to refactor and test.

        • Duplicated logic between different components and lifecycle methods.

        • Complex patterns like render props and higher - order components.


   The primary selling points of React hooks are:

        • Use state and hook into the component lifecycle without using a class.

        • Colocate related logic in one place in your component, rather than splitting it between various lifecycle methods.

        • Share reusable behaviors independent of component implementations (like the render prop pattern).



    What Do Hooks Replace ?

        Since the hooks API was introduced, I have stopped using:

        • class components.
        • The render prop pattern.
        Hooks aim to replace the complexity of render props and HOC’s, it aims to replace class components with functional components enhancing functional programming.


    What Do Hooks Not Replace ?


        I still frequently use:

        • Redux for all the reasons listed above.

        • Higher Order Components to compose in cross-cutting concerns that are shared by all or most of my application views, such as the Redux provider, a common layout provider, a configuration provider, authentication/authorization, i18n, and so on.

        • Separation between container and display components for better modularity, testability, and easier separation between effects and pure logic.



    Use - cases:

     •  One of the main reasons hooks were added to React is to offer a more powerful and expressive way to write (and share) functionality between components.


    Utilizes:

        • Hooks utilizes the fact that we can reach state context, among others within a functional component.



    Benefits of using hooks:

       •  We can do away with ES6 classes
       •  Isolate stateful logic
       •  It lets you split a component into smaller functions based on relatedness
       •  Easier to test
       •  Forces you to seperate your apps logic based on concerns
       •  Reuse for stateful logic between functions without affecting your component hierarchy




    What are some pitfalls of React hooks?

        • Pitfall 1: Starting without a good foundation
        • Pitfall 2: Not using (or ignoring) the ESLint plugin
        • Pitfall 3: Thinking in Lifecycles
        • Pitfall 4: Overthinking performance
        • Pitfall 5: Overthinking the testing of hooks
        • Pitfall 6:  Avoid testing implementation details



    What are common mistakes when using hooks?

        • Using useState when no rerender is needed
        • Using router.push instead of a link
        • Handling actions via useEffect
        • Single responsibility components
        • Single responsibility useEffects





What is a hook?
A hook is a special function that lets you hook into react features.
Forexample useState is a hook that lets you add react state to function components.

When would I use a hook?
If you write a function component and you realize you need to add some state to it. Previously you would have to convert it to a class, now you can use a hook inside the existing function component.

Are hooks designed to replace HOC’s and Render props?
Yes hooks are designed to replace HOC’s and render props and class components.
Hooks  exist for one purpose: to make it easier for you to do the things you were already doing.

Are Hooks just basically Javascript functions?
they are just Javascript functions!

What is the three letter word hooks always begins with?
use … e.g. useState, useEffect etc.


How many hooks does officially exist?
Officially, there are 10 of them. 10 new functions that exist to make writing and sharing functionalities in your components a lot more expressive.
What are the general rules of Hooks?

What are the general rules of hooks?
Dont call hooks inside loops, conditions or nested functions. Instead always use hooks at the top level of your react function.
By following this rule you ensure that hooks are called in the same order each time a component renders.
Thats what allows react to correctly preserve the state of hooks between multiple useState and useEffect calls.
Only call hooks from react functions
Dont call hooks from regular javascript functions. Instead you can:
Call hooks from react function components, call hooks from custom hooks.

Is there an ESLINT plugin for hooks?
We released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules. You can add this plugin to your project if you’d like to try it:

This plugin is included by default in Create React App.
npm install eslint-plugin-react-hooks --save-dev
// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}

Can we use multiple state or effect hooks in a single component and if we do how does react know which state corresponds to which usestate call?

Explain the useState Hook.
For a long time, you couldn’t use the local state in a functional component. Well, not until hooks.
With useState, your functional component can have (and update) local state.


Can we use Multiple State or Effect Hooks in a single component?
Yes we can!

How does React know which state corresponds to which useState call?
The answer is that React relies on the order in which Hooks are called.

How does why “hooks must be at top level” correspond to the usage of multiple state or effect hooks?
Because React relies on the specific order in which the hooks themselves are called.
The ESLINT plugin for hooks will enforce this and help us with that.
 */
