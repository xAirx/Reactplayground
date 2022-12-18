/* Within our application, we often want to use the same logic in multiple components.

This logic can include applying a certain styling to components, requiring authorization, or adding a global state.

One way of being able to reuse the same logic in multiple components, is by using the higher order component pattern.

This pattern allows us to reuse component logic throughout our application.


A Higher Order Component(HOC) is a component that receives another component.

The HOC contains certain logic that we want to apply to the component that we pass as a parameter.

After applying that logic, the HOC returns the element with the additional logic.

Say that we always wanted to add a certain styling to multiple components in our application.

Instead of creating a style object locally each time, we can simply create a HOC that adds the style objects to the component that we pass to it
 */

function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button = () = <button>Click me!</button>
const Text = () => <p>Hello World!</p>

const StyledButton = withStyles(Button)
const StyedText = withStyles(Text)

/*
We just created a StyledButton and StyledText component, which are the modified versions of the Button and Text component.

They now both contain the style that got added in the withStyles HOC!



Let’s take a look at the same DogImages example that was previously used in the Container / Presentational pattern!

The application does nothing more than rendering a list of dog images, fetched from an API.

    Let's improve the user experience a little bit.

    When we’re fetching the data, we want to show a "Loading..." screen to the user.

    Instead of adding data to the DogImages component directly, we can use a Higher Order Component that adds this logic for us.


    Let’s create a HOC called withLoader.

    A HOC should receive an component, and return that component.

    In this case, the withLoader HOC should receive the element which should display Loading… until the data is fetched.

Let's create the bare minimum version of the withLoader HOC that we want to use! */

function withLoader(Element) {
  return props => <Element />;
}

/* However, we don't just want to return the element it received. Instead, we want this element to contain logic that tells us whether the data is still loading or not.

To make the withLoader HOC very reusable, we won't hardcode the Dog API url in that component.

Instead, we can pass the URL as an argument to the withLoader HOC, so this loader can be used on any component that needs a loading indicator while fetching data from a different API endpoint. */

function withLoader(Element, url) {
  return props => {};
}

/* A HOC returns an element, a functional component props => { } in this case, to which we want to add the logic
that allows us to display a text with Loading… as the data is still being fetched.
Once the data has been fetched, the component should pass the fetched data as a prop.

logoDogImages.js
logowithLoader.js
 */

import React, { useEffect, useState } from "react";

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}


/*

Perfect! We just created a HOC that can receive any component and url.

    In the useEffect hook, the withLoader HOC fetches the data from the API endpoint that we pass as the value of url.
    While the data hasn't returned yet, we return the element containing the Loading... text.
    Once the data has been fetched, we set data equal to the data that has been fetched.
    Since data is no longer null, we can display the element that we passed to the HOC!

So, how can we add this behavior to our application, so it'll actually show the Loading... indicator on the DogImages list?

In DogImages.js, we no longer want to just export the plain DogImages component.
Instead, we want to export the "wrapped" withLoading HOC around the DogImages component. */

export default withLoading(DogImages);

/* The withLoading HOC also expects the url to know which endpoint to fetch the data from. In this case, we want to add the Dog API endpoint.
 */
export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);

/* Since the withLoader HOC returned the element with an extra data prop, DogImages in this case, we can access the data prop in the DogImages component.
 */

logoDogImages.js
logowithLoader.js

import React from "react";
import withLoader from "./withLoader";

function DogImages(props) {
  return props.data.message.map((dog, index) => (
    <img src={dog} alt="Dog" key={index} />
  ));
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);

/*
Perfect! We now see a Loading... screen while the data is being fetched.

The Higher Order Component pattern allows us to provide the same logic to multiple components, while keeping all the logic in one single place. The withLoader HOC doesn’t care about the component or url it receives: as long as it’s a valid component and a valid API endpoint, it’ll simply pass the data from that API endpoint to the component that we pass.
Composing

We can also compose
multiple Higher Order Components.

Let's say that we also want to add functionality that shows a Hovering! text box when the user hovers over the DogImages list.

We need to create a HOC that provides a hovering prop to the element that we pass. Based on that prop, we can conditionally render the text box based on whether the user is hovering over the DogImages list. */

/* We can now wrap the withHover HOC around the withLoader HOC. */

logoDogImages.js
logowithHover.js
logowithLoader.js

import React from "react";
import withLoader from "./withLoader";
import withHover from "./withHover";

function DogImages(props) {
  return (
    <div {...props}>
      {props.hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
);

/*
The DogImages element now contains all props that we passed from both withHover and withLoader. We can now conditionally render the Hovering! text box, based on whether the value of the hovering prop is true or false.

    A well-known library used for composing HOCs is recompose. Since HOCs can largely be replaced by React Hooks, the recompose library is no longer maintained, thus won't be covered in this article.

Hooks

In some cases, we can replace the HOC pattern with React Hooks.

Let’s replace the withHover HOC with a useHover hook. Instead of having a higher order component, we export a hook that adds a mouseOver and mouseLeave event listener to the element.

We cannot pass the element anymore like we did with the HOC. Instead, we'll return a ref from the hook for that should get the mouseOver and mouseLeave events. */

logoDogImages.js
logowithLoader.js
logouseHover.js

import { useState, useRef, useEffect } from "react";

export default function useHover() {
  const [hovering, setHover] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, hovering];
}


/* The useEffect hook adds an event listener to the component, and sets the value hovering to true or false, depending on whether the user is currently hovering over the element.

Both the ref and hovering values need to be returned from the hook: ref to add a ref to the component that should receive the mouseOver and mouseLeave events, and hovering in order

to be able to conditionally render the Hovering! text box.

Instead of wrapping the DogImages component with the withHover HOC, we can use the useHover hook right inside the DogImages component. */

logoDogImages.js
logouseHover.js
logowithLoader.js

import React from "react";
import withLoader from "./withLoader";
import useHover from "./useHover";

function DogImages(props) {
  const [hoverRef, hovering] = useHover();

  return (
    <div ref={hoverRef} {...props}>
      {hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);


/* Perfect! Instead of wrapping the DogImages component with the withHover component, we can simply use the useHover hook within the component directly.

Generally speaking, React Hooks don't replace the HOC pattern.

"In most cases, Hooks will be sufficient and can help reduce nesting in your tree." - React Docs

As the React docs tell us, using Hooks can reduce the depth of the component tree. Using the HOC pattern, it's easy to end up with a deeply nested component tree.
 */

<withAuth>
  <withLayout>
    <withLogging>
      <Component />
    </withLogging>
  </withLayout>
</withAuth>

By adding a Hook to the component directly, we no longer have to wrap components.
