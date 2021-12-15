/* With useRef hook, you can create a "ref object" for accessing DOM.
 The object's current property contains reference for the DOM.
 */

import React, { useRef } from "react";

function MyComponent() {
  const target = useRef(null);

  const handleClick = () => {
    console.log(target.current);
  };

  return (
    <>
      <div ref={target}>...</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default MyComponent;
