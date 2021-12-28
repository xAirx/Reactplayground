/* 5. Side-effect cleanup
https://javascript.plainenglish.io/the-react-useeffect-hook-explained-with-examples-95259b3ac89f

Some side-effects need cleanup: close a socket, clear timers.

If the callback of useEffect(callback, deps) returns a function,
 then useEffect() considers this as an effect cleanup:
 */

useEffect(() => {
  // Side-effect...
  return function cleanup() {
    // Side-effect cleanup...
  };
}, dependencies);

/*
Cleanup works the following way:

A) After initial rendering, useEffect() invokes the callback having the side-effect.
cleanup function is not invoked.

B) On later renderings, before invoking the next side-effect callback, useEffect()
 invokes the cleanup function from the previous side-effect execution
 (to clean up everything after the previous side-effect), then runs the current side-effect.

C) Finally, after unmounting the component, useEffect()
invokes the cleanup function from the latest side-effect.

React useEffect() Hook: when callback and cleanup are invoked

Let's see an example when the side-effect cleanup is useful.

The following component <RepeatMessage message="My Message" /> accepts a prop message.
Then, every 2 seconds the message prop is logged to console:
 */

import { useEffect } from "react";
function RepeatMessage({ message }) {
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 2000);
  }, [message]);
  return <div>I'm logging to console "{message}"</div>;
}

/*
Open the demo and type some messages.
The console logs every 2 seconds any message that's been ever typed into the input.
However, you need to log only the latest message.

    That's the case to clean up the side-effect: cancel the previous
timer when starting a new one.Let's return a cleanup function that stops the previous timer: */

import { useEffect } from "react";
function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [message]);
  return <div>I'm logging to console "{message}"</div>;
}

/* Open the demo and type some messages: only the latest message logs to console.
 */

// Example 2

/* The cleanup function

When your application needs to define a lot of side effects, then you will have to use a cleanup function that will clean up each side effect when it happens. Otherwise, you will affect your application performance.

Let’s take a simple example where you will have a web page that shows the screen width in pixels when a user resizes the page. For this, we will need a resize event.

Here is the example: */

import { useState, useEffect } from "react";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    }); // Return the cleanup function which cleans the effect(event).
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  });
  return (
    <>
      <div>{screenWidth}</div>
    </>
  );
};

/* As you can see above, we used the state hook to update the screen width. Then we used the effect hook useEffect to perform the resize event which allows updating the screen width whenever you resize the page in your browser.

The cleanup function is returned inside the callback function and it allows us to remove the events after they happen. */
