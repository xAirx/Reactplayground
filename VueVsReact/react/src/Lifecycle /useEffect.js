/* In React functional component, there is no concept of
lifecycle. It's much simpler here.

functional component is rendered and re-rendered when
its props or states are updated.
if you want to do something just after rendering,
put that operation in the useEffect hook.
 */


import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    someApi.getItems().then(response => {
      setItems(response.data);
    });
  }, []);

/* useEffect behaves differently depending on what is passed as a
 2nd argument.
 */

// if there is no 2nd argument,
// 1st argument is called on every renders.
useEffect(() => {});

// if 2nd argument is an empty array,
// 1st argument is called only on first render.
useEffect(() => {}, []);
// this is like "mounted" in Vue.js

// if 2nd argument contains one or more items,
// 1st argument is called on first render and when the items are updated.
useEffect(() => {}, [aaa, bbb]);
// this is like "mounted" plus "updated" & "watch", I guess.

/* useEffect's 1st argument can return "clean up" function,
that is called just before its component is removed from the DOM.
 */

import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // ...

    return () => {
      // clean up function.
      // this is like "destroyed" in Vue.
    };
  }, []);

  return <div>...</div>;
}

/* On the other hand, class components have constructor and
lifecycle methods that work just like Vue.js.
I don't show you around in this article, but you can
 learn about these from this post. */