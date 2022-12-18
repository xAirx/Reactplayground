/*

A Higher-Order Component Example


Let’s start with a basic example. Here’s a higher-order component that transforms and returns usernames in uppercase: */

const hoc = (WrappedComponent) => (props) => {
  return (
    <div>
      <WrappedComponent {...props}>
        {props.children.toUpperCase()}
      </WrappedComponent>
    </div>
  );
};

/* This higher-order component receives a WrappedComponent as an argument.

 Then it returns new component with props passed to it creating a React element.

We call .toUpperCase() on the props.children, to transform the passed props.children to uppercase.

To make use of this higher-order component, we need to create a component that receives props and renders the children. */

const Username = (props) => <div>{props.children}</div>;

/*
Next, we wrap Username with the higher-order component.


 Let’s store that in a variable:
 */

const UpperCaseUsername = hoc(Username);

/* In our App component, we can now make use of it like this: */

const App = () => (
  <div>
    <UpperCaseUsername>Kingsley</UpperCaseUsername>
  </div>
);

/*

The UpperCaseUsername component is merely a rendering of the Username UI that, in turn, pulls in state from the WrappedComponent acting as the higher-order component.
 */
