/* There's nothing like Vue's methods in React.React component is
essentially just a JavaScript function, so you treat it as it is. */

function MyComponent() {
  const [name, setName] = useState("John");

  function sayHello() {
    console.log(`Hello, ${name}!`);
  }

  return <button onClick={sayHello}>...</button>;
}
