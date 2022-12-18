/* With useRef hook, you can create a "ref object" for accessing DOM.
 The object's current property contains reference for the DOM.
 */

//useRef allows us to easily use react refs.

/* Refs and useRef

Refs are a special attribute that are available on all React components.
They allow us to create a reference to a given element / component when the component mounts
useRef allows us to easily use React refs.
We call useRef(at the top of the component) and attach the returned value to the element's ref attribute to refer to it.
Once we create a reference, we use the current property to modify(mutate) the element's properties.
Or we can call any available methods on that element(like.focus() to focus an input).

Why is this useful ? It can be useful for things like holding on to `setInterval` and`setTimeout`
IDs so they can be cleared later.Or any bit of statefulness that _could_ change but you don't want it
to cause a re - render when it does.

It's also useful for referencing DOM nodes directly */

function App() {
  const [query, setQuery] = React.useState("react hooks");
  // we can pass useRef a default value
  // we don't need it here, so we pass in null to ref an empty object
  const searchInput = useRef(null);

  function handleClearSearch() {
    // is always an object
    // current references the text input once App mounts
    searchInput.current.value = "";
    // useRef can store basically any value in its .current property
    searchInput.current.focus();
  }

  return (
    <form>
      <input
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        ref={searchInput}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClearSearch}>
        Clear
      </button>
    </form>
  );
}

// Example 2:
import React, { useRef } from "react";

function MyComponent() {
  const target = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleClick = () => {
    // make a focus with useRef
    console.log(target.current);
  };

  return (
    <>
      <div ref={target}>...</div>
      <button onClick={handleClick}>Click me</button>
      <input
        type="text"
        placeholder="Add a todo item"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
    </>
  );
}

export default MyComponent;
