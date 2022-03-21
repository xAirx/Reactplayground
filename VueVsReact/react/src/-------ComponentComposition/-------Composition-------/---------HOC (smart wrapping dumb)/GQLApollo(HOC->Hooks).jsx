/* Using Higher Order Components makes it possible to provide the same logic to many components, while keeping that logic all in one single place. Hooks allow us to add custom behavior from within the component, which could potentially increase the risk of introducing bugs compared to the HOC pattern if multiple components rely on this behavior.

https://www.patterns.dev/posts/hoc-pattern/

Best use-cases for a HOC:

    The same, uncustomized behavior needs to be used by many components throughout the application.
    The component can work standalone, without the added custom logic.

Best use-cases for Hooks:

    The behavior has to be customized for each component that uses it.
    The behavior is not spread throughout the application, only one or a few components use the behavior.
    The behavior adds many properties to the component

Case Study

Some libraries that relied on the HOC pattern added Hooks support after the release. A good example of this is Apollo Client.

    No experience with Apollo Client is needed to understand this example.

One way to use Apollo Client is through the graphql() higher order component. */
logoInputHOC.js
logoInputHooks.js

import React from "react";
import "./styles.css";

import { graphql } from "react-apollo";
import { ADD_MESSAGE } from "./resolvers";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { message: "" };
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    this.props.mutate({ variables: { message: this.state.message } });
  };

  render() {
    return (
      <div className="input-row">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Type something..."
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default graphql(ADD_MESSAGE)(Input);



/* With the graphql() HOC, we can make data from the client available to components that are wrapped by the higher order component!

Although we can still use the graphql() HOC currently, there are some downsides to using it.

When a component needs access to multiple resolvers, we need to compose

multiple graphql() higher order components in order to do so.

Composing multiple HOCs can make it difficult to understand how the data is passed to your components.

The order of the HOCs can matter in some cases, which can easily lead to bugs when refactoring the code.

After the release of Hooks, Apollo added Hooks support to the Apollo Client library.

Instead of using the graphql() higher order component, developers can now directly access the data through the hooks that the library provides.

    Let's look at an example that uses the exact same data as we previously saw in the example with the graphql() higher order component.

    This time, we'll provide the data to the component by using the useMutation hook that Apollo Client provided for us. */

logoInputHOC.js
logoInputHooks.js

import React, { useState } from "react";
import "./styles.css";

import { useMutation } from "@apollo/react-hooks";
import { ADD_MESSAGE } from "./resolvers";

export default function Input() {
  const [message, setMessage] = useState("");
  const [addMessage] = useMutation(ADD_MESSAGE, {
    variables: { message }
  });

  return (
    <div className="input-row">
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Type something..."
      />
      <button onClick={addMessage}>Add</button>
    </div>
  );
}



/* By using the useMutation hook, we reduced the amount of code that was needed in order to provide the data to the component.

Besides a reduction in boilerplate, it's also much easier to use the data of multiple resolvers in a component.

Instead of having to compose multiple higher order components, we can simply write multiple hooks in the component.

Knowing how data gets passed to the component is much easier this way, and improves developer experience when refactoring components, or breaking them down into smaller pieces.
*/


////////////////////////Pros////////////////////////

/* Using the Higher Order Component pattern allows us to keep logic that we want to re - use all in one place.

This reduces the risk of accidentally spreading bugs throughout the application by duplicating code over and over,

potentially introducing new bugs each time.By keeping the logic all in one place, we can keep our code DRY and easily enforce separation of concerns

 */

/*

////////////////////////Cons////////////////////////

The name of the prop that a HOC can pass to an element, can cause a naming collission. */

function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button = () = <button style={{ color: 'red' }}>Click me!</button>
const StyledButton = withStyles(Button)

/* In this case, the withStyles HOC adds a prop called style to the element that we pass to it.
However, the Button component already had a prop called style, which will be overwritten! Make sure that the HOC can handle accidental name collision, by either renaming the prop or merging the props.
 */


function withStyles(Component) {
  return props => {
    const style = {
      padding: '0.2rem',
      margin: '1rem',
      ...props.style
    }

    return <Component style={style} {...props} />
  }
}

const Button = () = <button style={{ color: 'red' }}>Click me!</button>
const StyledButton = withStyles(Button)

/* When using multiple composed
HOCs that all pass props to the element that's wrapped within them, it can be difficult to figure out which HOC is responsible for which prop.
 This can hinder debugging and scaling an application easily. */