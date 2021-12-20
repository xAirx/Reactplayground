/*
As React developers, it's very helpful sometimes to be able to reference a given React element with the help of a ref.

We create refs in React with the help of the useRef hook.

    It's important to note, however, that useRef isn't just helpful for referencing to a certain DOM element.

    The React documentation says so itself:

	The ref object that's created by useRef is a generic container with a current property that's mutable and can hold any value.


There are certain benefits to be able to store and update values with useRef.

It allows us to store a value that will not be in memory that will not be erased across re - renders.

If we wanted to keep track of a value across renders with the help of a simple variable, it would be reinitialized each time the component renders.

However, if you use a ref, the value stored in it will remain constant across renders of your component.

What is a use case for leveraging useRef in this way ?

This could be helpful in the event that we wanted to perform a given side effect on the initial render only, for example: */

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef({ hasRendered: false });

  useEffect(() => {
    if (!ref.current.hasRendered) {
      ref.current.hasRendered = true;
      console.log("perform action only once!");
    }
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
