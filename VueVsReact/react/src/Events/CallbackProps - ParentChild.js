/* React has no syntax for event emitting.
You just pass a handler function as a prop-- i.e.parent
component determine what to do and children execute that.

Events don’t have any special meaning in React, they’re just callback props will be called by the child component.
*/

function Child({ onHello }) {
  const handleClick = () => {
    console.log("hello there");
    onHello();
  };

  return <button onClick={handleClick}>click me</button>;
}

function Parent() {
  const parentMethod = () => {
    /* blah blah... */
  };

  return <Child onHello={parentMethod} />;
}
