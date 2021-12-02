// React Props passed with just their name have a default value of true.

export default App = () => {
  return (
    //<MyComponent showTitle={true} />
    <MyComponent showTitle />
  );
};

// Here hello world will show up. because showTitle is true by default.
const MyComponent = ({ showTitle }) => {
  if (showTitle) {
    return <h1>Hello World</h1>;
  }
};
