/* React components can be passed as props (including children)

We've seen that props are very flexible, and if we don't pass them to a component, an error will not be thrown.

This flexibility is also extended to what we can pass as a prop. Not only can JSX elements be passed as props to components, but we can also pass other components as props.

In fact, there is a special type of prop that is automatically provided on the props object called children.

    We receive any children for a given component if any components or elements are passed between the opening and closing tags of that component.  */

// Passing a component as a prop

const Button = () => {
  return <button>Click me!</button>;
};

export default function App() {
  return <MyComponnet showTitle button={<Button />} />;
}
