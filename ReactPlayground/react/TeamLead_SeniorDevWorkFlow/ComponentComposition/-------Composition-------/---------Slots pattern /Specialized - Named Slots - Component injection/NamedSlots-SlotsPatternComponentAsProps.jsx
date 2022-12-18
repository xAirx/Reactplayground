/* [Props.children] - Generic Components

https://reactjs.org/docs/composition-vs-inheritance.html

React has a powerful composition model that allows you to build reusable components that are easy to compose.

In this section, we will consider a few problems where developers new to
React often reach for inheritance, and show how we can solve them with composition.

Containment

Some components don’t know their children ahead of time.

This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

We recommend that such components use the special children prop to pass children elements directly into their output: */

// FancyBorder is a generic component that takes a single prop, color, and renders whatever else is passed into it.
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}{" "}
    </div>
  );
}

/// Here we pass contentt into fancyborder above.
/* This lets other components pass arbitrary children to them by nesting the JSX:
 */

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

/* Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop.
Since FancyBorder renders { props.children } inside a < div >, the passed elements appear in the final output.


While this is less common, sometimes you might need multiple “holes” in a component.
In such cases you may come up with your own convention instead of using children: */

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left} </div>
      <div className="SplitPane-right">{props.right} </div>
    </div>
  );
}
function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

/* React elements like < Contacts /> and < Chat /> are just objects, so you can pass them as props like any other data.
This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React. */
